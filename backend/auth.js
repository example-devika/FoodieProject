import jwt from "jsonwebtoken"
const authMiddleware=async(req,res,next)=>{
const {token}=req.headers
if(!token){
    res.json({success:false,message:"not authorised user again"})
}
try{
    const token_Decode=jwt.verify(token,process.env.JWT_SECRETKEY)
    console.log(token_Decode)
    req.body.userId=token_Decode.id
    // res.json("success")
    next()
}
catch(err){
    res.json({success:false,message:err})
}

}
export default authMiddleware