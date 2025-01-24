import React, { useContext } from 'react'
import "./Cart"
import { StoreContext } from '../../context/storeContext'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {food_list,cartItems,removeFromCart,getTotalCartAmount,url}=useContext(StoreContext)
const Navigate=useNavigate()
  return (
    <>
    <div className="cartitems-container">
      <div className="cart-items">
        {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <>
                <div className="cartitems-list">
                  <img src={url+"/images/"+item.image} alt="" />
                  <h4 className="title">{item.name}</h4>
                  <p className="price">{item.price}</p>

                  <p className="quantity">{cartItems[item._id]}</p>
                  <p className="price">${item.price*cartItems[item._id]}</p>

                  <button className="remove" onClick={()=>removeFromCart(item._id)}>Remove</button>
                </div>
                <hr />
             
             
             
             
             
                </>

            )
          }
          })
        }
          
        
      </div>
      <div className="Total">
        <h3>Cart Amount</h3>
        <div className="cart-details">
          <p>SubTotal:</p>
          <p>{getTotalCartAmount()}</p>
        </div>
        <div className="cart-details">
          <p>Delivery fee:</p>
          <p>{2}</p>
        </div>
        <div className="cart-details">
          <p>total:</p>
          <p>{getTotalCartAmount()+2}</p>
        </div>
<button onClick={()=>Navigate('/Orders')}>Placeorder</button>
      </div>
    </div>
      
    </>
  )
}

export default Cart
