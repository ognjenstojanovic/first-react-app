import React from 'react';

class ProductItem extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.product.id)
    }

    render () {
        const props = this.props
        const prod = props.product
        return <span key={prod.id} onClick={this.handleClick}>
            <img src={prod.image} alt="" />
            <span>
                <p>{prod.name}</p>
                <p>{prod.price}</p>
            </span>
            <hr/>
        </span>
    }
}

export default ProductItem;