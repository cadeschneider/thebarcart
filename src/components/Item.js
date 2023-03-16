import React from "react";

function Item(props) {

    return(

        <div className="drink" onClick={props.handleClick}>
            {props.image !== undefined && <img className="drink--image" src={props.image} />}
            <h3 className="drink--name">{props.item}</h3>
        </div>

    )
}

export default Item