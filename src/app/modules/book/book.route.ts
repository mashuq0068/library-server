import { Router } from "express";
import { bookControllers } from "./book.controller";

const router = Router();

router.post("/", bookControllers.createBookIntoDB);
router.get("/", bookControllers.getAllBooksFromDB);
router.get("/:id", bookControllers.getSingleBookFromDB);
router.put("/:id", bookControllers.updateBookIntoDB);
router.delete("/:id", bookControllers.deleteBookFromDB);

export const bookRoutes = router;
