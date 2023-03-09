import React from "react";
import "../App.css"
import { NavLink } from "react-router-dom";

function NavBar() {

    return(
        <nav className="navbar">
            <div className="navbar--links">
                <NavLink to="/" className="navbar--text">Home</NavLink>
                <NavLink to="/finddrink" className="navbar--text">Find Drink</NavLink>
                <NavLink to="/cart" className="navbar--text">Cart</NavLink>
            </div>
        </nav>

    );
}

export default NavBar