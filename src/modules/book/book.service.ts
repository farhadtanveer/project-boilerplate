import { StudentModel } from "../student/student.model";
import { TBook } from "./book.interface";

const createBookIntoDB = async (book: TBook) => {
  const result = await StudentModel.create();
  return result;
};

const getAllBooks = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleBookFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const BookServices = {
  createBookIntoDB,
  getAllBooks,
  getSingleBookFromDB,
};
