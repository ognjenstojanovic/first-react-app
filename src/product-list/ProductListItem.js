import React from 'react';

class ProductItem extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.product.id)
    }

    handleAddToCart = () => {
        this.props.onAddToCart(this.props.product)
    }

    render () {
        const props = this.props
        const prod = props.product


        const addButton = props.disabled
            ? null
            : <button onClick={this.handleAddToCart}>Add to cart</button>

        return <div> 
            <span key={prod.id} onClick={this.handleClick}>
                <img src={prod.image} alt="" />
                <span>
                    <p>{prod.name}</p>
                    <p>{prod.price}</p>
                </span>
            </span>
            {addButton}                        
            <hr/>
        </div>
    }
}

export default ProductItem;