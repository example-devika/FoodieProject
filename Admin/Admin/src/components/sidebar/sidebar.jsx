import React from "react";
import "./sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="add" />
          <p>Add items</p>
        </NavLink>
        {/* <NavLink to="/order" className="sidebar-option">
          <img src={assets.order_icon} alt="order" />
          <p>List items</p>
        </NavLink> */}
         <NavLink to="/list" className="sidebar-option">
          <img src={assets.order_icon} alt="order" />
          <p>List items</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
