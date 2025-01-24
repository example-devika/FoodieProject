

import { Route, Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import Placeorder from "./pages/PlaceOrder/Placeorder"
import Menu from "./pages/Menu/Menu"
import { useState } from "react"
import Signin_popup from "./components/signin-popup/Signin_popup"
import Orders from "./pages/PlaceOrder/Placeorder"
import Myorders from "./pages/MyOrders/Myorders"



function App() {
const [showSignin,setShowSignin]=useState(false)
  return (
    <>
    <div className="app">
    {showSignin?<Signin_popup setShowSignin={setShowSignin}/>:""}

        <Navbar setShowSignin={setShowSignin} showSignin={showSignin}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/Orders" element={<Orders/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path='/myorders' element={<Myorders/>}/>

        </Routes>
    </div>
    
    </>
     
  )
}

export default App
