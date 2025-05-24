import dotenv from "dotenv";
import app from "./app.js"
dotenv.config();
import http from "http";
http.createServer(app).listen(process.env.PORT,(err)=>{
    if(err){
        console.log(`Server is Not Start ${err}`);
    }else{
        console.log(`Server Start on Port no ${process.env.PORT}`);
    }
})