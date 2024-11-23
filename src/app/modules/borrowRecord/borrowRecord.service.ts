import { BorrowRecord } from "@prisma/client";
import { prisma } from "../../config";

const borrowBook = async (payload: BorrowRecord) => {
  const result = await prisma.$transaction(async (tnx) => {
    const result = await tnx.borrowRecord.create({
      data: payload,
      select: {
        borrowId: true,
        bookId: true,
        memberId: true,
        borrowDate: true,
      },
    });
    await tnx.book.update({
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
  });
  return result;
};
const returnBook = async (payload: Partial<BorrowRecord>) => {
  const result = await prisma.$transaction(async (tnx) => {
    const borrowedBook = await tnx.borrowRecord.findFirstOrThrow({
      where: {
        borrowId: payload.borrowId,
      },
    });
    await tnx.borrowRecord.update({
      where: {
        borrowId: payload.borrowId,
      },
      data: {
        returnDate: new Date(),
      },
    });
    await tnx.book.update({
      where: {
        bookId: borrowedBook.bookId,
      },
      data: {
        availableCopies: {
          increment: 1,
        },
      },
    });
  });
  return result;
};


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


export const borrowRecordServices = {
  borrowBook,
  returnBook,
};
