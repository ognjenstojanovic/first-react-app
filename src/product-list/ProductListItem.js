import React from 'react';

function ProductListItem(props) {
    const product = props.product
    return (
        props.product.map((prod) => 
        <li key ={ prod.id}>
            <img src={prod.image} alt="" />
            <span>
                <p>{prod.name}</p>
                <p>{prod.price}</p>
            </span>
            <hr/>
        </li>
    ))
}

export default ProductListItem;