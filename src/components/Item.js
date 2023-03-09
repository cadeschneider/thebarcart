import React from "react";

function Item(props) {

    return(

        <div onClick={props.handleClick}>{props.item}</div>

    )
}

export default Item