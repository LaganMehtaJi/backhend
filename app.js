import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import morgan from "morgan";
import ConnectDB from "./db/db.js";
import cookieParser from "cookie-parser";
dotenv.config();
ConnectDB();
import express from "express";
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use('/users',userRoutes);

export default app;