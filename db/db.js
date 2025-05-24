import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
function ConnectDB(){
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("MongoDB is Connected");
    }).catch((err)=>{
        console.log(`MongoDB is Not Connected ${err}`);
    })
}
export default ConnectDB;