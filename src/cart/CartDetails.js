import React from 'react'

export default props => {    
    return <ol>
            {props.cart.map((product) =>
                <li key={product.id}>
                    {product.name}
                    {console.log(product)}
                </li>
            )}
        </ol>
}