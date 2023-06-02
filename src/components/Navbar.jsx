import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div className="menu">
    <NavLink exact activeClassName="active" to='/'>Country </NavLink>
    <NavLink exact activeClassName="active" to='/state'>States </NavLink>
    </div>
    </>
  )
}

export default Navbar;