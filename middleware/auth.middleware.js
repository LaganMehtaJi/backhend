import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export const authUser = async (req,res,next)=>{
    try{
     const token = req.cookies.token||req.headers.authorization.split(' ')[1];
     if(!token){
        res.status(400).json({error:"Unauthorized User"});
     }
     const decode = jwt.verify(token,process.env.KEY);
     req.user = decode;
     next();
    }catch(error){
        res.status(400).json({error:"Please Aunthicate"});
    }
}