import express from "express" 
import multer from "multer"
import addFood, { delfood, listFood, updatedfood} from "../controllers/foodcontroller.js"
const foodRouter=express.Router()
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
      return(
      cb(null, `${Date.now()}-${file.originalname}`));
    }
  });
const upload=multer({storage:storage})
foodRouter.post('/add', upload.single('image'), addFood);
foodRouter.post("/add",addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/del",delfood)
foodRouter.put("/update-food",updatedfood)
// foodRouter.put("/put:id",updatefood)







export default foodRouter