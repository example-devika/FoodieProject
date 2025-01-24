import React, { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import FoodItems from '../foodItems/FoodItems'
import "./fooddisplay.css"

const Fooddisplay = ({category}) => {
   const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id="food-display">
      <h2>Top Dishes near you</h2>
      <div className="fooddisplay-list">
        {
            food_list.map((item,index)=>{
              {if(category==='Everything' || category===item.category)
                return(
                    <FoodItems key={index} image={item.image} id={item._id} name={item.name} price={item.price} description={item.description}/>
                )
             
              }
            })
        }
      </div>
    </div>
  )
}

export default Fooddisplay
