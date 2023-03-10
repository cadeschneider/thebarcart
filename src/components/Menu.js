import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Menu() {

    const [list, setList] = useState([])

    useEffect(() => {

        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[])

    const datalist = list.map(item => {

        return <NavLink to={`/finddrink/${item.strCategory}`} className="navbar--text">{item.strCategory}</NavLink>
    })

    return(

            <div className="dropdown--menu">
                {datalist}
            </div>
    )
}

export default Menu