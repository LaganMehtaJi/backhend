import ConnectDB from "./config/db.js";
import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors("http://localhost:5173"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/users", userRoutes);
app.use("/project", projectRoutes);


ConnectDB();
export  default app;
