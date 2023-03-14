import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from '../components/Item'

function FindDrink() {

    let { drinkCategory } = useParams();

    const [list, setList] = useState([]);

    useEffect(() => {

        console.log(drinkCategory)
        console.log(((drinkCategory !== undefined) ? ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkCategory) : ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")))
        fetch(((drinkCategory !== undefined) ? ("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + drinkCategory) : ("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")))
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[drinkCategory])

    const datalist = list.map(item => {

        return <Item item={item[((drinkCategory !== undefined) ? ("strDrink") : ("strCategory"))]} handleClick={() => {handleClick(item['strDrink'])}} />
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