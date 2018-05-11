import React from 'react';

function ProductListItem(props) {
    return (
        <li>
            <img src={props.product.image} alt="" />
            <span>
                <p>{props.product.name}</p>
                <p>{props.product.price}</p>
            </span>
            <hr/>
        </li>
    )
}

export default ProductListItem;