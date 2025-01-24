import foodModel from "../models/foodmodel.js"

import fs from "fs"
import foodRouter from "../routes/foodroute.js";


const addFood= async(req,res)=>{
    console.log("File received:", req.file); // Debugging
    console.log("Request body:", req.body);
    let image_filename=`${req.file.filename}`;
let {name,description,price,category}=req.body
console.log(req.body)
let image=image_filename

    const food=new foodModel({
        name,
        description,
        price,
        category,
        image
    })

    try{
        await food.save();
        res.json({success:true,message:"food added"})
    }
    catch(e){
        console.log(e);
        res.json({success:false,message:"Error"})


    }
}
export const listFood=async(req,res)=>{
    const foods=await foodModel.find({})
    res.json({success:true,data:foods})
}

export const delfood=async(req,res)=>{
    try {
        let food=await foodModel.findByIdAndDelete(req.body.id)
         fs.unlink(`uploads/${food.image}`,(err)=>{//delete image in uploades folder when we deleted food
            if (err) {
                console.error("Error deleting image:", err);
            } else {
                console.log("Image deleted successfully");
            }
         })
        res.json({success:true,message:"food deleted"})
        console.log(food._id)
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
  
}
// Route to Update a Food Item
export const updatedfood= async (req, res) => {
    const { id } = req.body; // Get the food item ID from the URL
    const updates = req.body; // Get the updates from the request body
  
    try {
      // Update the food item in the database
      const updatedFood = await foodModel.findByIdAndUpdate(
        id,
        { $set: updates },
        { new: true } // Return the updated document
      );
  
      if (!updatedFood) {
        return res.status(404).json({ message: "Food item not found" });
      }
  
      res.status(200).json({
        message: "Food item updated successfully",
        updatedFood,
      });
    } catch (error) {
      res.status(500).json({ message: "Error updating food item", error });
      console.log(error)
    }
  }
// export const updatefood=async(req,res)=>{
   
//     try {
//         const { id, ...updateData } = req.body;

//         // Fetch the food item by ID
//         const food = await foodModel.findById(id);

//         if (!food) {
//             return res.status(404).json({ message: "Food item not found" });
//         }
//         const updateFood = await foodModel.findByIdAndUpdate(
//             id,
//             { $set: updateData },
//             { new: true } // Return the updated document
//         );

//         // Respond with the updated item
//         res.status(200).json({ message: "Food item updated successfully", updateFood });
//     } catch (error) {
//         console.error("Error updating food item:", error);
//         res.status(500).json({ message: "An error occurred" });
//     }

//     }





export default addFood
