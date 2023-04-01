import React, {useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import ServicesDropdown from '../components/ServicesDropdown';

export function NavBar() {

    return(
        <header className="header">
        <nav>
            <ul>
            <li><NavLink to="/" >Home</NavLink></li>
            <ServicesDropdown />
            <li><NavLink to="/cart">Cart</NavLink></li>
            </ul>
        </nav>
    </header>

    );
}