import React from "react";
import {NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      This is a navBar page
       
      <br/>
      <NavLink to="/home">Go to Home Page</NavLink>
      <br/>
      <NavLink to="/about">Go to About Page</NavLink>
      <br/>
      <NavLink to="/work">Go to Work Page</NavLink>
      <br/>
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br/>
      <NavLink to="/">Go to Main Page</NavLink>

    </div>
  );
};

export default NavBar;
