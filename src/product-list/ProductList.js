import React from 'react';
import ProductListItem from './ProductListItem';

function ProductList(props) {
    const products = this.state.products;
    return (
        <ol>
            {products.map((product) =>
                <ProductListItem product = {product} key = {product.id} />
            )}
        </ol>
    )
}

export default ProductList;