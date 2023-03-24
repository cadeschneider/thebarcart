import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from '../components/Item'
import '../stylesheets/FindDrinks.css';

function FindDrink() {

    let { drinkCategory } = useParams();

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        
        const cocktailAPI = "https://www.thecocktaildb.com/api/json/v1/1/";

        const drinkCat = drinkCategory.replace("/", "/\\")

        console.log((cocktailAPI + ((drinkCategory !== undefined) ? ("filter.php?c=" + drinkCat) : ("list.php?c=list"))))
        fetch(cocktailAPI + ((drinkCategory !== undefined) ? ("filter.php?c=" + drinkCat) : ("list.php?c=list")))
        .then(response => response.json())
        .then(data => setDrinks(data.drinks));

    },[drinkCategory])

    let datalist;

    if (drinkCategory !== undefined) {

            datalist = drinks.map(item => {

            return <Item item={item["strDrink"]} image={item["strDrinkThumb"]} handleClick={() => {handleClick(item['strDrink'])}} />
        })

    } else {
             datalist = drinks.map(item => {

            return <Item item={item["strCategory"]} handleClick={() => {handleClick(item['strDrink'])}} />
        })
    }

    function handleClick(item) {
        
        console.log(item)

    } 

    function shuffle(array) {

        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    return (

        <div className="drinklist">
            {shuffle(datalist)}
        </div>

    )
}

export default FindDrink