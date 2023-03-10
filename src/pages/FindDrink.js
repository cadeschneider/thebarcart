import React, { useEffect, useState } from "react";
import Item from '../components/Item'

function Categories() {

    const [list, setList] = useState([]);
    const [link, setLink] = useState({name: "strCategory", link: "list.php?c=list", showdrink: false})

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

    console.log(datalist.length)

    function handleClick(item) {
        
        if (link.showdrink === false) {
            setLink(prevLink => ({...prevLink,
                name: "strDrink",
                link: `filter.php?c=${item}`,
                showdrink: true
            }))
        } else {
            setLink(prevLink => ({...prevLink,
                name: "strDrink",
                link: `filter.php?c=${item}`,
                showdrink: false
        }))}

    } 

    return (

        <div>
            {datalist}
        </div>

    )
}

export default Categories