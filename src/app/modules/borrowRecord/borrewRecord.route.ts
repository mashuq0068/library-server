import { Router } from "express";
import { BorrowRecordControllers } from "./borrowRecord.controller";

const router = Router()
router.post('/borrow' , BorrowRecordControllers.borrowBookFromDB)
router.post('/return' , BorrowRecordControllers.returnBookFromDB)
router.post('/borrow/overdue' , BorrowRecordControllers.getOverdueBorrowListFromDB)

export const borrowRoutes = router