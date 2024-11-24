"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRecordServices = void 0;
const config_1 = require("../../config");
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.$transaction((tnx) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield tnx.borrowRecord.create({
            data: payload,
            select: {
                borrowId: true,
                bookId: true,
                memberId: true,
                borrowDate: true,
            },
        });
        yield tnx.book.update({
            where: {
                bookId: payload.bookId,
            },
            data: {
                availableCopies: {
                    decrement: 1,
                },
            },
        });
        return result;
    }));
    return result;
});
const returnBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.$transaction((tnx) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowedBook = yield tnx.borrowRecord.findFirstOrThrow({
            where: {
                borrowId: payload.borrowId,
            },
        });
        yield tnx.borrowRecord.update({
            where: {
                borrowId: payload.borrowId,
            },
            data: {
                returnDate: new Date(),
            },
        });
        yield tnx.book.update({
            where: {
                bookId: borrowedBook.bookId,
            },
            data: {
                availableCopies: {
                    increment: 1,
                },
            },
        });
    }));
    return result;
});
// const getOverdueBorrowList = async () => {
//   const overdueBooks: BorrowRecord[] = await prisma.$queryRaw`
//     SELECT borrowId, borrowDate, returnDate, bookId, memberId, book.title AS bookTitle, member.name AS borrowerName
//     FROM borrowRecord
//     JOIN book ON book.bookId = borrowRecord.bookId
//     JOIN member ON member.memberId = borrowRecord.memberId
//     WHERE returnDate IS NULL
//       AND borrowDate <= NOW() - INTERVAL 14 DAY;
//   `;
// console.log(getOverdueBorrowList);
//   const result = overdueBooks.map((book) => {
//     const today = new Date();
//     const borrowDate = new Date(book.borrowDate);
//     const overdueDays = Math.floor((today  - borrowDate ) / (1000 * 60 * 60 * 24)) - 14; // Calculate overdue days
//     return {
//       borrowId: book.borrowId,
//       bookTitle: book.bookId.title, 
//       borrowerName: book.memberId.name, 
//       overdueDays: overdueDays > 0 ? overdueDays : 0, 
//     };
//   });
//   return result.length > 0 ? result : [];
// };
exports.borrowRecordServices = {
    borrowBook,
    returnBook,
};
