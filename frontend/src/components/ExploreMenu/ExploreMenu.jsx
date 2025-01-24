import React from 'react'
import "./ExploreMenu.css"
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className="paraexplore-menu">Choose from a diverse menu with group of dishes,snacks,dinner items,tiffins,Non-veg,veg</p>
       <p className='category'> {category}</p> 
        <div className="exploremenu-list">
            {
                menu_list.map((item,index)=>{
                    return(
                        <div className="exploremenu-items" key={index}>
                            <img src={item.menu_image} alt="menu-item" className={category===item.menu_name?'active':''}  onClick={()=>
                                setCategory((prev)=>prev===item.menu_name?'Everything':item.menu_name)
                            }/>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })
            }
        </div>
        <hr/>

    </div>
  )
}

export default ExploreMenu
