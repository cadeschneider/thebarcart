import React, { useState, useEffect } from 'react';
import '../stylesheets/DropdownMenu.css'
import { NavLink } from "react-router-dom";

//This code creates a ServicesDropdown component that uses React's useState hook to manage the state of whether the dropdown menu is open or closed. It also includes an event handler to toggle the state when the user hovers over the "Services" link.
///The component returns a list item with a link to "Services", and if the dropdown menu is open, it includes an unordered list with links to "Build", "Create", and "Analyze".
//You can use this component in your header section by importing it and including it in your navigation list

function ServicesDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

    const [list, setList] = useState([])

        /// Access API here
    useEffect(() => {

        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[])


    const datalist = list.map(item => {
      const drinkCat = item.strCategory.replace("/", "\\/")
        console.log(drinkCat + " " + item.strCategory)
      const navlinkd = <li><NavLink to={`/finddrink/${drinkCat}`} className="dropdown--text">{item.strCategory}</NavLink></li>

    })

  return (
    <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
      <NavLink to="/finddrink" >Find Drinks</NavLink>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
                {datalist}
        </ul>
      )}
    </li>
  );
}

export default ServicesDropdown;