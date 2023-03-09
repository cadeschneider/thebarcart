import React, { useEffect, useState } from "react";
import Item from '../components/Item'

function Categories() {

    const [list, setList] = useState([]);

    const [link, setLink] = useState({name: "strCategory", link: "list.php?c=list"})

    console.log(list)

    useEffect(() => {

        console.log("https://www.thecocktaildb.com/api/json/v1/1/" + link.link)
        fetch("https://www.thecocktaildb.com/api/json/v1/1/" + link.link)
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[link])

    const datalist = list.map(item => {

        return <Item item={item[link.name]} handleClick={() => {handleClick(item[link.name])}} />
    })

    function handleClick(item) {
        console.log(item)
        setLink(prevLink => ({...prevLink,
            name: "strDrink",
            link: `filter.php?c=${item}`
        }))
    }

    return (

        <div>
            {datalist}
        </div>

    )
}

export default Categories