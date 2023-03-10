import React, {useState, useRef} from "react";
import "../App.css"
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { HoverMenu } from "./HoverMenu";

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
                <NavLink to="/" className="navbar--text">Home</NavLink>
                <div className="navbar--menu">
                    <NavLink to="/" className="navbar--text" ref={dropdownRef} onMouseOver={() => setMenuDropDownOpen(true)}>
                        Find Drinks
                        {isMenuDropDownOpen && <Menu />}
                    </NavLink>
                </div>
                <NavLink to="/cart" className="navbar--text">Cart</NavLink>
            </div>
        </nav>

    );
}