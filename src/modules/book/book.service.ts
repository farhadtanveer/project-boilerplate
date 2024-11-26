import { TBook } from "./book.interface";
import { BookModel } from "./book.model";

const createBookIntoDB = async (book: TBook) => {
  const result = await BookModel.create(book);
  return result;
};

const getAllBooks = async () => {
  const result = await BookModel.find();
  return result;
};

const getSingleBookFromDB = async (id: string) => {
  const result = await BookModel.findOne({ id });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooks,
  getSingleBookFromDB,
};
