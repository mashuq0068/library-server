"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_route_1 = require("../modules/book/book.route");
const member_route_1 = require("../modules/member/member.route");
const borrewRecord_route_1 = require("../modules/borrowRecord/borrewRecord.route");
const router = express_1.default.Router();
const routes = [
    {
        path: '/books',
        routes: book_route_1.bookRoutes,
    },
    {
        path: '/members',
        routes: member_route_1.memberRoutes,
    },
    {
        path: '/',
        routes: borrewRecord_route_1.borrowRoutes,
    },
];
routes.forEach((route) => router.use(route.path, route.routes));
exports.allRoutes = router;
