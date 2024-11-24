import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { borrowRecordServices } from "./borrowRecord.service";

const borrowBookFromDB = catchAsync(async (req, res) => {
  const result = await borrowRecordServices.borrowBook(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

const returnBookFromDB = catchAsync(async (req, res) => {
  await borrowRecordServices.returnBook(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book returned successfully",
  });
});

const getOverdueBorrowListFromDB = catchAsync(async (req, res) => {
  const overdueBooks = await borrowRecordServices.getOverdueBorrowList();

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Overdue borrow list fetched",
    data: overdueBooks,
  });
});

export const BorrowRecordControllers = {
  borrowBookFromDB,
  returnBookFromDB,
  getOverdueBorrowListFromDB
};
