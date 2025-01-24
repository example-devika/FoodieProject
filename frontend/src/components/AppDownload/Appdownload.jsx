import React from 'react'
import "./appDownload.css"
import { assets } from '../../assets/assets'

const Appdownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For Better Experience Download <br /> Cravings App</p>
        <div className="app-platforms">
<img src={assets.googleplay} alt="" />
<img src={assets.appStore} alt="" />

        </div>
      
    </div>
  )
}

export default Appdownload
