import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const StoreContext=createContext(null)
export const Provider=(props)=>{
    let url="http://localhost:4000"
  const [food_list,setFoodlist]=useState([])

    const fetchFoodList=async()=>{
      let response=await axios.get(url+"/api/list")
      console.log(response)
      setFoodlist(response.data.data)
    }
    const [Token,setToken]=useState("")
    useEffect(()=>{
      
      async function loadData() {
        await fetchFoodList()
        if(localStorage.getItem("token")){
          setToken(localStorage.getItem("token"))
          await loadCartData(localStorage.getItem("token"))
        }
       
    }
loadData()
    },[])
  
  const [cartItems,setCartItems]=useState({})
  const addToCart=async(itemId)=>{
    if(!cartItems[itemId]){
    setCartItems(prev=>({...prev,[itemId]:1}))
    }
    else{
      setCartItems(prev=>({...prev,[itemId]:prev[itemId]+1}))
    }
    if(Token){
      await axios.post(url+"/api/cart/add",{itemId},{headers:{Token}})
  }
 

  }
  const removeFromCart=async(itemId)=>{
    setCartItems(prev=>({...prev,[itemId]:prev[itemId]-1}))
    if(Token){
      await axios.post(url+"/api/cart/remove",{itemId},{headers:{Token}})
  }

  }
  const loadCartData=async (Token)=>{
    const response=await axios.post(url+"/api/cart/get",{},{headers:{Token}})
    setCartItems(response.data.cartData);
}

 
  
  const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){
        if(cartItems[item]>0){






            let itemInfo=food_list.find((product)=>product._id === item);
            totalAmount+=itemInfo.price*cartItems[item];
        }
        }
        return totalAmount;


  
  }
  const contextValue={
         food_list,
         addToCart,
         removeFromCart,setCartItems,
         cartItems,getTotalCartAmount,url,Token,setToken

  }
  return(
    <StoreContext.Provider value={contextValue}>
       {props.children}
    </StoreContext.Provider>
  )
  }