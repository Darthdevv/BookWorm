import express from "express";
import { deleteBook, getBooks, getRecommendedBook } from "../controllers/book.controllers.js";
import authenticationHandler from "../middlewares/auth/authentication.middleware.js";

const router = express.Router();

router
  .route("/")
  .get( getBooks)
  .delete(
    authenticationHandler,
    deleteBook
  );
router
  .route("/:id")
  .get(getRecommendedBook);

export default router;
