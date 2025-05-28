import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import http from "http";
const server = http.createServer(app);
server.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});