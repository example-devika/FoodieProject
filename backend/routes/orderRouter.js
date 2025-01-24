import express from 'express';

import { placeOrder, userOrders } from '../controllers/orderController.js';
import authMiddleware from '../auth.js';


const orderRouter= express.Router();


orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/userOrders',authMiddleware,userOrders)



orderRouter.post('/place',placeOrder);
// orderRouter.post('/create-checkout-session',StripeCheckout)
export default orderRouter



