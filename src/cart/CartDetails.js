import React from 'react'

const onRemove = (product, fn) => {
    return () => {
        console.log('removing ', product)
        fn(product)
    }
}




export default props => {
    console.log('props cartDetails:', props)    
    return <div>
            <ol>
            {props.cart.map((product) =>
                <li key={product.id}>
                    {product.name}
                    <br />
                    {product.quantity}
                    <br />
                    {console.log(product)}
                    <button onClick={onRemove(product, props.onRemoveFromCart)}>Remove Product</button>
                </li>
            )}        
            </ol>
            <button onClick={props.onBack}>Back</button>
        </div>
}