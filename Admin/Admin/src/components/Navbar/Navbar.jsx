import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="logo-img">
        <img src={assets.logo} alt="assets_logo" className="logo" />
      </div>
      <div className="profile-img">
        <img src={assets.profile} alt="image" />
      </div>
    </div>
  );
};

export default Navbar;
