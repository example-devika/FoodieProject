import OrderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
import Stripe from "stripe";



const stripe=new Stripe(process.env.STRIPE_SECRET_Key);
//placing user order from frontend
//placing user order from frontend
const placeOrder=async (req,res)=>{
    const frontendUrl="http://localhost:5173/"
    console.log('placeorder function is working');
   
        const newOrder=new OrderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});


    const product=await stripe.products.create({
        name:"Product1"
    })
    //checking whether the product got created.
    if(product){
        var price=await stripe.prices.create({
            product:`${product.id}`,
            unit_amount: 100 * 100,
            currency:'inr',








        })
    }
    if(price.id){
                const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:'inr',
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity




        }))
        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })


        //creating a session
        var session=await stripe.checkout.sessions.create({
            line_items: line_items,
            mode:'payment',
            success_url:`${frontendUrl}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontendUrl}/verify?success=false&orderId=${newOrder._id}`,
  customer_email:'demo@gmail.com'




        })
    // }
    res.json(session)




}

    
    res.json(session)




}
const userOrders=async(req,res)=>{
    try{
        const orders=await OrderModel.find({userId:req.body.userId});
        res.json({success:true,data:orders})
    }
    catch(e){
        console.log(error);
        res.json({success:false,message:error})
    }
}

export {placeOrder,userOrders}











