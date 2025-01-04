
import React from "react";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";

import '../Navbar/Navbar.css'



const Navbar = () => {


    return (

        <div className="navbar-div">
            <NavLink to="/" className="navlinks">Home</NavLink>
            <NavLink to="/about" className="navlinks">About</NavLink>
            <NavLink to="/profile" className="navlinks">Profile</NavLink>
        </div>
    )
}

export default Navbar;