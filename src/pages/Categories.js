import React, { useEffect, useState } from "react";
import Item from '../components/Item'

function Categories() {

    const [list, setList] = useState([]);

    const [link, setLink] = useState("list.php?c=list")

    useEffect(() => {

        console.log("https://www.thecocktaildb.com/api/json/v1/1/" + link)
        fetch("https://www.thecocktaildb.com/api/json/v1/1/" + link)
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[link])

    const datalist = list.map(item => {

        return <Item item={item.strCategory} handleClick={() => {handleClick(item.strCategory)}} />
    })

    function handleClick(item) {
        setLink(`filter.php?c=${item}`)
    }

    return (

        <div>
            {datalist}
        </div>

    )
}

export default Categories