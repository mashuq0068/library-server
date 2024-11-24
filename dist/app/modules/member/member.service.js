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
exports.memberServices = void 0;
const config_1 = require("../../config");
const createMember = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.create({
        data: payload,
    });
    return result;
});
const getMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.findMany();
    return result;
});
const getSingleMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.member.findUniqueOrThrow({
        where: { memberId: id },
    });
    return result;
});
const updateMember = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.member.findUniqueOrThrow({
        where: { memberId: id },
    });
    const result = yield config_1.prisma.member.update({
        where: { memberId: id },
        data: payload,
    });
    return result;
});
const deleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield config_1.prisma.member.findUniqueOrThrow({
        where: { memberId: id },
    });
    yield config_1.prisma.member.delete({
        where: { memberId: id },
    });
});
exports.memberServices = {
    createMember,
    getMembers,
    getSingleMember,
    updateMember,
    deleteMember,
};
