import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from '../components/Item'

function FindDrink() {

    let { drinkCategory } = useParams();

    const [list, setList] = useState([]);

    useEffect(() => {

        console.log("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkCategory)
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkCategory)
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[drinkCategory])

    const datalist = list.map(item => {

        return <Item item={item['strDrink']} handleClick={() => {handleClick(item['strDrink'])}} />
    })

    function handleClick(item) {
        
        console.log(item)

    } 

    return (

        <div>
            {datalist}
        </div>

    )
}

export default FindDrink