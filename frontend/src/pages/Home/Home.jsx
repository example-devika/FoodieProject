import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import "./Home"
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import Fooddisplay from '../../components/foodDisplay/Fooddisplay'
import Footer from '../../components/footer/Footer'
import Appdownload from '../../components/AppDownload/Appdownload'

const Home = () => {
  const [category,setCategory]=useState('Everything')
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <Fooddisplay category={category}/>
      <Appdownload/>
      <Footer/>
    </div>
  )
}

export default Home
