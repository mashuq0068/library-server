import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { bookServices } from "./book.service";

const createBookIntoDB = catchAsync(async (req, res) => {
  const result = await bookServices.createBook(req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooksFromDB = catchAsync(async (req, res) => {
  const result = await bookServices.getBooks();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getSingleBookFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookServices.getSingleBook(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBookIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await bookServices.updateBook(id, req.body);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBookFromDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  await bookServices.deleteBook(id);
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const bookControllers = {
  createBookIntoDB,
  getAllBooksFromDB,
  getSingleBookFromDB,
  updateBookIntoDB,
  deleteBookFromDB,
};
