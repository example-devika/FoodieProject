import React, { useContext, useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"
import { Link, Navigate } from 'react-router-dom'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom';

const Navbar = ({setShowSignin,showSignin}) => {
  const Navigate=useNavigate()
  const[menuvar,setMenu]=useState('Home')
  const {getTotalCartAmount,Token,setToken}=useContext(StoreContext)
  const logout=()=>{
localStorage.removeItem("token")
setToken("")
Navigate('/')
  }
  return (
    <nav>
    <div className='navbar'>
    <img src={assets.logo} alt="assets_logo" className='logo'/>
    <ul className="navbar-menu">
      <Link to="/" onClick={()=>setMenu('Home')} className={menuvar==='Home'?"active":""}>Home</Link>
      <a href="#explore-menu" onClick={()=>setMenu('Menu')} className={menuvar==='Menu'?"active":""}>Menu</a>
      <a href='#appdownload' onClick={()=>setMenu('MobileApp')} className={menuvar==='MobileApp'?"active":""}>MobileApp</a>
      <a href='#footer' onClick={()=>setMenu('ContactUs')} className={menuvar==='ContactUs'?"active":""}>ContactUs</a>

</ul>
<div className="navbar-right">
  <img src={assets.search_icon} alt="searchicon" className="nav-icon" />
  <div className="navbar-search-icon">
    <Link to="/cart">
    <img src={assets.basket_icon} alt="basketicon" className="nav-icon" />
    
    
      
   
    </Link>
    <div className={getTotalCartAmount()===0?"":'dot'}> </div>
  </div>
  {!Token?  <button className='searchbtn' onClick={()=>setShowSignin(true)}>login</button>
: <div className='navbar-profile'>
  <img src={assets.profile_icon} alt="" />
  <ul className="nav-profile-dropdown">
  <li onClick={()=>Navigate('/myorders')}><img src={assets.orders_icon} alt="" /><p >Orders</p></li>
    <hr />
    <li><img src={assets.logout_icon} alt="" /><p onClick={logout}>Logout</p></li>
  </ul>
  </div>}

</div>

    </div>
    </nav>
  )
}

export default Navbar
