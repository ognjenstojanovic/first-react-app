import React from 'react';

function ProductListItem(props) {
    return (
        <li>
            <img src={props.product.image} alt="" />
            <p>{props.product.name}</p>
            <p>{props.product.price}</p>
        </li>
    )
}

export default ProductListItem;