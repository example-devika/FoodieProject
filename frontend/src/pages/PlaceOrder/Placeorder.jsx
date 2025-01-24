import React, { useEffect, useState,useContext } from 'react'
import "./Placeorder"
import { StoreContext } from '../../context/storeContext'

const Orders = () => {
const {getTotalCartAmount,token,food_list,cartItems,url}=useContext(StoreContext)
const [data,setData]=useState({
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  state:"",
  zipcode:"",
  country:"",
  phone:""
})

useEffect(()=>{
  console.log(data);
},[data])

// after this lets use OnchangeHanlder to detect the change in input fields.
const onChangeHandler= async (event)=>{
  const name=event.target.name;
  const value=event.target.value;
  setData(data=>({...data,[name]:value}))


}

const paymentFunction=async (e)=>{
  e.preventDefault();
  console.log('payment function called!');
  let orderItems=[];
  food_list.map((item)=>{
    if(cartItems[item._id]>0){
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo);
    }




  })
  // console.log(orderItems)
  let orderData={
    userId:2,
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+2




  }



  let response=await axios.post('http://localhost:4000/api/order/place');
  if(response && response.status===200){
    window.location.href=response.data.url
    console.log(response.data);
  }
  else{
    console.log('Error')
  }
}






  return (
    <form action="" onSubmit={paymentFunction} className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-fields">
        <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
        <input type="text" name="lastName" onChange={onChangeHandler}  value={data.lastName} placeholder='Last Name' />
      </div>
      <input type="text" name="email" onChange={onChangeHandler} value={data.email}   placeholder='Email address' />
      <input type="text"    name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />


      <div className="multi-fields" >
        <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
        <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
      </div>
      <div className="multi-fields">
        <input name='zipcode' onChange={onChangeHandler}  value={data.zipcode} type="text" placeholder='Zip Code' />


        <input type="text" onChange={onChangeHandler}  value={data.country} placeholder='Country' />
      </div>
      <input type="text" onChange={onChangeHandler}  value={data.phone}placeholder='Phone' />
</div>
<div className="place-order-right">


<div className="cart-total">
  <h2>Cart Totals</h2>
  <div>
    <div className="cart-total-details">
      <p>Sub total</p>
      <p>{getTotalCartAmount()} </p>


    </div>
    <div className="cart-total-detials">
      <p>Delivery Fee</p>
      <p>{2}</p>
    </div>
    <div className="cart-total-details">
      <p><b>Total</b></p>
      <b>{getTotalCartAmount()+2}</b>


    </div>


  </div>
  <button type='submit'>Proceed to payment</button>
</div>


</div>
</form>

  )
}

export default Orders
