import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList(props) {
    const products = props.products;
    return (
        <ul>
            {products.map((product) =>
                <ProductListItem key={product.id}
                                 product={product} />
            )}
        </ul>
    )
}

export default ProductList;