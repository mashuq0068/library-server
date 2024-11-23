import { Router } from "express";
import { BorrowRecordControllers } from "./borrowRecord.controller";

const router = Router()
router.post('/borrow' , BorrowRecordControllers.borrowBookFromDB)
router.post('/return' , BorrowRecordControllers.returnBookFromDB)

export const borrowRoutes = router