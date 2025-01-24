import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import "./signin-popup.css"
import { StoreContext } from '../../context/storeContext'
import axios from "axios"

const Signin_popup = ({setShowSignin}) => {
  const [currstate,setcurrstate]=useState('SignUp')
  const {url,Token,setToken}=useContext(StoreContext)
  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })
  const onChangeHandler=async(e)=>{
    const name=e.target.name
const value=e.target.value
setData({...data,[name]:value})
  }
  const onLogin=async(e)=>{
    e.preventDefault()
    let newurl=url
    if(currstate==="SignUp"){
      newurl+="/api/user/register"
    console.log(newurl,"newurl")

    }
    else{
      newurl+="/api/user/login"
    console.log(newurl,"newurl")
      
    }
    try {
      console.log(newurl)

      const res = await axios.post(newurl, data);
      console.log( res);
      if(res.data.success){
        setToken(res.data.token)
        localStorage.setItem("token",res.data.token)
        setShowSignin(false)
      }
      else{
        alert(res.data.message)
      }
      console.log(Token)
  } catch (error) {
      console.log("Error during POST request:",error);
  }
  }
  // useEffect(()=>{
  //   console.log(data)
  // },[data])
  
  return (
    <div className="signin">
    <div className='signin-popup'>
      
      <form action='' onSubmit={onLogin} className="signin-popup-container">
    <div className="form-heading">
        <p>{currstate}</p>
        <img src={assets.cross_mark} alt="" onClick={()=>setShowSignin(false)} className='cross' />
        </div>
        <div className="popup-inputs">
          {currstate==='SignUp'?
          <input type="text" name="name" onChange={onChangeHandler} placeholder='Your name'/>:""

          }
          <input type="email" name="email"  onChange={onChangeHandler} id="email" placeholder='Email' />
          <input type="password" name="password"  onChange={onChangeHandler} id="password" placeholder='Enter password' />
          <button type='submit'>{currstate==='SignUp'?"create anaccount":"Login"}</button>
          
        </div>
        <div className="popup-condition">
          <div className="pop-check-box">
          <input type="checkbox" name="" id="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>
          {currstate==='SignUp'?<p className='pop'>Have an account <span onClick={()=>setcurrstate('Log in')}>Logn in</span></p>:<p className='pop'>Don't have an account <span onClick={()=>setcurrstate('SignUp')}>SignUp Here</span></p>}
        </div>

        <button type='submit'>Proceed to payment</button>
      </form>

    </div>
    </div>
  )
}

export default Signin_popup
