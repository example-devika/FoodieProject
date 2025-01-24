import  {userModel}  from "../models/userModel.js";
import validator from "validator"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETKEY); // Ensure return and jwt.sign are on the same line
};
const loginUser=async(req,res)=>{
   
    
    const {email,password}=req.body
    try {
        const user=await userModel.findOne({email})
        console.log(user)
        if(!user){
            return res.json({success:false,message:"User dosen't exist"})
        }
        if(user.length==0){
            console.log('if block')
            res.json({success:false,message:"User Doesnt Exists"});
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success:false,message:"please enter proper credentials"})

        }
        const token=createToken(user._id)
res.json({success:true,token})
    
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
  

}
const registerUser=async(req,res)=>{
    const {name,email,password}=req.body
   

    try {
        const exists=await userModel.findOne({email})
        if(exists){
            return 
            res.json({success:false,message:"user is already existed"})
        }
        else if(!validator.isEmail(email)){
            return
            res.json({success:false,message:"please enter valid email"})

        }
        else if(password.length<8){
            return res.json({success:false,message:"Please Enter Strong Password"})
    } 
    else{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(password,salt)
    const newUser=new userModel({
        name:name,
        email:email,
        password:hashedpassword
})
const user=await newUser.save()
const token=createToken(user._id)
res.json({success:true,message:"successfully registered",token})
    }

}
    catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}
export {loginUser,registerUser}
