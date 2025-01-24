import express from "express"
import connectDB from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import cors from "cors"
import userRouter from "./routes/Userroutes.js"
import "dotenv/config"
import cartRouter from "./routes/cartrouter.js"
import orderRouter from "./routes/orderRouter.js"
// import userRouter from "./routes/userRoutes.js"


const app=express()

app.use(express.json())
app.use(cors())
app.use(cors({origin:"http://localhost:5173"}))
const port=4000
app.get('/',(req,res)=>{
    res.send("Hello")
})
connectDB()

app.use("/api",foodRouter)
app.use('/images',express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use('/api/order ',orderRouter)

app.listen(port,console.log(`sever is running on http://localhost:${port}`))