import express from "express";
import User from "../modles/user.modles.js";
import { validationResult } from "express-validator";
import * as UserServices from "../service/user.service.js";

export const createUserController = async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
       const user = await UserServices.createUser(req.body);
       const token = user.generateJWT();
       res.status(201).send({user,token});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};

export const loginUserController = async (req,res)=>{
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    try {
       const user = await User.findOne(email).select('+password');
       if(!email){
         res.status(401).json({errors:'Unable to Login'});
       }
       const matchPassword = await User.isValidPassword(password);
       if(!matchPassword){
           res.status(401).json({errors:'Wrong Login'});
       }
       const token = User.generateJWT();
       res.status(200).send({user,token});
    }catch(error){
        res.status(400).json({error:error.message});
    }
};