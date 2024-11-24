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
exports.bookServices = void 0;
const config_1 = require("../../config");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.create({
        data: payload,
    });
    return result;
});
const getBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.findMany();
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.book.findUniqueOrThrow({
        where: { bookId: id },
    });
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.book.findUniqueOrThrow({
        where: { bookId: id },
    });
    const result = yield config_1.prisma.book.update({
        where: { bookId: id },
        data: payload,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.book.findUniqueOrThrow({
        where: { bookId: id },
    });
    yield config_1.prisma.book.delete({
        where: { bookId: id },
    });
});
exports.bookServices = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
