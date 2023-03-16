import React from "react";

function Item(props) {

    return(

        <div className="drink" onClick={props.handleClick}>
            <h3 className="drink--name">{props.item}</h3>
            {props.image !== undefined && <img className="drink--image" src={props.image} />}
        </div>

    )
}

export default Item