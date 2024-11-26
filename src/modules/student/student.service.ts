import { TStudent } from "./student.interface";
import { StudentModel } from "./student.model";

const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDb = async () => {
  return await StudentModel.find();
};

const getSingleStudentFromDB = async (id: string) => {
  return await StudentModel.findOne({ id });
};
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDb,
  getSingleStudentFromDB,
};
