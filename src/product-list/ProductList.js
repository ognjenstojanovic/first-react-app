import React, { Component } from 'react';
import ProductListItem from './ProductListItem';

function ProductList(props) {
    var products = [];
    for (var key in props.products){
        products.push(props.products[key])
    } 
    return (
        <ol>
            {products.map((product) =>
                <ProductListItem product = {product} key = {product.id} />
            )}
        </ol>
    )
}


export default ProductList;