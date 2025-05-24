import mongoose from "mongoose";
import  User from "../modles/user.modles.js";
export const createUser = async ({
    email,password
})=>{
    if(!email||!password){
        throw new Error('Email and Pasword are require');
    }
    const hashedPassword = await User.hashPassword(password);
    const user = await User.create({
        email:email,
        password:hashedPassword
    })
    return user;
}

