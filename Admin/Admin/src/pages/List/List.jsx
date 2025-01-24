import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./List.css"
import { toast } from 'react-toastify'
const List = () => {
    const [list,setList]=useState([])
    const url = "http://localhost:4000";

    const fetchList=async()=>{
        const response=await axios.get(`${url}/api/list`);
        // console.log(response.data)
        if(response.data.success){
          setList(response.data.data);
          // console.log(list)
          
        }
        else{
          toast.error('Error')
        }
      }
      useEffect(()=>{
        fetchList()
      },[])
    const removeFood=async(foodId)=>{
     console.log(foodId)
      const response=await axios.post(`${url}/api/del`,{id:foodId})

      await fetchList()
      console.log(response.data)

      if(response.data.success){
        toast.success(response.data.message)
      }
      else{
        toast.error("item not deleted")
      }
    }
  return (
    <div>
       <div className='list add flex-col'>
      <p>All Foods list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b className='image-title'>Image</b>
          <b>Name</b>
          <b className='category'>Category</b>
          <b>Price</b>
          <b>Action</b>


        </div>
        {
          list.map((item,index)=>{
            // console.log(item)
            return(
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <p className='cursor' onClick={()=>removeFood(item._id)}>X</p>
              </div>
            )


          })
        }
      </div>


     
    </div>
  

      
    </div>
  )
}

export default List
