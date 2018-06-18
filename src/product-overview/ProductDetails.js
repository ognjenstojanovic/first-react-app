import React from 'react';
import {connect} from 'react-redux'

function ProductDetails(props) {
    if (props.product == null) {
        return <h1>Loading product...</h1>
    }

    return (
        <div>
            <a href='javascript:;' onClick={props.onBack}>Back</a>
            <img src={props.product.image} alt="" width = '100px' height = '100px' align = 'left' />
            <div>
                <p>{props.product.name} - {props.product.price}$</p>
                <p>{props.product.text}</p>
            </div>
        </div>
    )
}

export default connect(state => {
    return {
        product: state.product
    }
})(ProductDetails);