import { Request, Response } from "express";
import { BookServices } from "./book.service";

// create book
const createBook = async (req: Request, res: Response) => {
  try {
    const { book: bookData } = req.body;
    const result = await BookServices.createBookIntoDB(bookData);

    res.status(200).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get all books
const getAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookServices.getAllBooks();
    res.status(200).json({
      success: true,
      message: "All Books retrieved succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get single book
const getSingleBook = async (req: Request, res: Response) => {
  try {
    const { bookId } = req.params;
    const result = await BookServices.getSingleBookFromDB(bookId);
    res.status(200).json({
      success: true,
      message: "Single data retrieved succesfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BookControllers = {
  createBook,
  getAllBooks,
  getSingleBook,
};
