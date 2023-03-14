import React from "react";

function Item(props) {

    return(

        <div className="drinks" onClick={props.handleClick}>{props.item}</div>

    )
}

export default Item