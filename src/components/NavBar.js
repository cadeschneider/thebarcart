import React, {useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { HoverMenu } from "../hooks/HoverMenu";

export function NavBar() {

    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

    // Function to close dropdown
    const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
    };

    HoverMenu(dropdownRef, closeHoverMenu); // Call the hook

    return(
        <nav className="navbar">
            <div className="navbar--links">
                <div className="link--container">
                    <NavLink to="/" className="navbar--text">Home</NavLink>
                </div>
                <div className="link--container" ref={dropdownRef}>
                    <NavLink to="/finddrink" className="navbar--text" onMouseOver={() => setMenuDropDownOpen(true)}>
                        Find Drinks
                    </NavLink>
                    {isMenuDropDownOpen && <Menu />}
                </div>
                <div className="link--container">
                    <NavLink to="/cart" className="navbar--text">Cart</NavLink>
                </div>
            </div>
        </nav>

    );
}