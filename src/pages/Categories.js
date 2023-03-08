import React, { useEffect, useState } from "react";

function Categories() {

    const [list, setList] = useState([]);

    useEffect(() => {

        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
        .then(response => response.json())
        .then(data => setList(data.drinks));

    },[])

    console.log(list)

    const datalist = list.map(item => {

        return <div>{item.strCategory}</div>
    })

    return (

        <div>
            {datalist}
        </div>

    )
}

export default Categories