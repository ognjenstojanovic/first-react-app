import React from 'react';

function ProductDetails(props) {
    return (
        <div>
            <img src={props.product.image} alt="" width = '100px' height = '100px' align = 'left' />
            <div>
                <p>{props.product.name} - {props.product.price}$</p>
                <p>{props.product.text}</p>
            </div>
        </div>
    )
}

export default ProductDetails;