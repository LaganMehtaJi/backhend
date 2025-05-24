import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();
const userSchema = new mongoose.Schema({
   email:{
    type:String,
    require:true,
    unique:true,
    trim:true,
    lowercase:true,
    minLength:[6,"Email Must be at least 6 characters long"],
    maxLength:[55,"Email must not be Longer then 55 characters"]
   },
   password:{
    type:String,
    require:true,
    select:false
   }
});
userSchema.statics.hashPassword = async function (password){
    return await bcrypt.hash(password,10);
}
userSchema.methods.isValidPassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateJWT =   function(){
    return  jwt.sign({email:this.email},process.env.KEY,{expiresIn:"1h"});
}

const User = mongoose.model('users',userSchema);

export default User;