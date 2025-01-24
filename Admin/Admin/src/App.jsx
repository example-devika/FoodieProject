import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/sidebar/sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Order from './pages/Order/Order'
import { ToastContainer } from 'react-toastify'
import List from './pages/List/List'

function App() {
const urlprop="http://localhost:4000";
  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <hr  />
    <div className='app-content'>
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add urlprop={urlprop}/>}/>
        {/* <Route path="/order" element={<Order/>}/> */}
        <Route path="/list" element={<List/>}/>

      </Routes>
    </div>
      
     
      
       
    </>
  )
}

export default App
