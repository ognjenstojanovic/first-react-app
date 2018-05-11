import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList(props) {
    const products = props.products;
    return (
        <ol>
            {products.map((product) =>
                <ProductListItem key={product.id}
                                 product={product} />
            )}
        </ol>
    )
}

export default ProductList;