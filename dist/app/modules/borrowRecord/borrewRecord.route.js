"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = require("express");
const borrowRecord_controller_1 = require("./borrowRecord.controller");
const router = (0, express_1.Router)();
router.post('/borrow', borrowRecord_controller_1.BorrowRecordControllers.borrowBookFromDB);
router.post('/return', borrowRecord_controller_1.BorrowRecordControllers.returnBookFromDB);
exports.borrowRoutes = router;
