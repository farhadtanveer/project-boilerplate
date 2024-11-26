import express, { Application, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./modules/student/student.route";
import { BookRoutes } from "./modules/book/book.route";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/books", BookRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
