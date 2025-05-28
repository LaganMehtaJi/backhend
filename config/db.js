import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
function ConnectDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("MongoDB connected successfully");
    }).catch((err)=>{
        console.log("MongoDB connection failed", err);
    });
}

export default ConnectDB;