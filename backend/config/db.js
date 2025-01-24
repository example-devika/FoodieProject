import mongoose from "mongoose"
 const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://devika_58:devika_58@cluster0.hae9z.mongodb.net/')
    .then(()=>{console.log('DBconnected')})
   
}
export default connectDB