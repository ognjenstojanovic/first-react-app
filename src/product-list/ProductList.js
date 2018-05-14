import React from 'react';
import ProductItem from './ProductListItem';


function ProductList (props) {
    console.log('rendering product list')
    if (props.products == null) {
        return <h1>Loading products...</h1>
    }

    return (
        <ol>
            {props.products.map((product) =>
                <li key={product.id}>
                    <ProductItem 
                        product={product} 
                        onClick={props.onProductClick}
                    />
                </li>
            )}
        </ol>
    )
}


export default ProductList;