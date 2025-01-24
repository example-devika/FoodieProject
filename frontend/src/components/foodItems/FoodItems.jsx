import React, { useContext, useState } from "react";
import { assets, food_list } from "../../assets/assets";
import "./FoodItems.css"
import { StoreContext } from "../../context/storeContext";

const FoodItems = ({ image, id, price, description, name }) => {
  // const [itemCount,setitemCount]=useState(0)
  const {addToCart,cartItems,removeFromCart,url}=useContext(StoreContext)
  return (
    <div className="food-item">
      <div className="food-item-image">
        <img src={url+"/images/"+image} alt="food-img" />
        {
            !cartItems[id]?<button  className="add" onClick={()=>addToCart(id)}>Add</button>:
            <div className="food-item-counter"  >
              <button className="sub" onClick={()=>removeFromCart(id)}>-</button>
              <p>{cartItems[id]}</p>
              {/* <input type="text" onChange={(e)=>setitemCount(parseInt(e.target.value))} value={itemCount}/> */}
              <button  className="ad" onClick={()=>addToCart(id)}>+</button>

            </div>
      }
      </div>
    

      <div className="food-item-info">
    
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.star_rating1} alt="" className="rating" />
        </div>
        <div className="food-item-desc">
          <p>{description}</p>
        </div>
        <div className="food-item-price">
          <p><b>$</b>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
