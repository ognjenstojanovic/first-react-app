import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  getProducts, 
  getProductById,
} from './services/products';
import ProductList from './product-list/ProductList';
import ProductDetails from './product-overview/ProductDetails';
import Cart from './cart/Cart'
import CartDetails from "./cart/CartDetails"


const switchFn = (cases, val, def = null) => {
  if (val in cases) {
    return cases[val]
  } else {
    return def
  }
}

const pageMapping = {
  'product-list': ProductList,
  'product-details': ProductDetails,
  'cart': CartDetails,
}


class App extends Component {
  state = {
    currentPage: 'product-list',
    products: null,
    product: null,
    cart: [],
  }

  handleProductClick = (productId) => {
    console.log('clicked on product id ', productId)

    this.setState(state => {
      return {
        ...state,
        currentPage: 'product-details'
      }
    })

    getProductById(productId)
    .then(product => {
      this.setState(state => {
        return {
          ...state,
          product,
          currentPage: 'product-details'
        }
      })
    })
  }

  onBack = () => {
    this.setState(state => {
      return {
        ...state,
        currentPage: 'product-list'
      }
    })
  }

  onAddToCart = (product) => {
    console.log('on Add to Cart', product)
    this.setState(state => {      
      return {
        ...state,
        cart: [...state.cart, product]
      }
    })
  }

  goToCart = () =>{
    this.setState(state => {
      return {
        ...state,
        currentPage: 'cart'
      }
    })
  }

  onRemoveFromCart = (product) => {
    this.setState(state => {
      return {
        ...state,
        cart: state.cart.filter((p) => {
          return p.id !== product.id
        })
      }
    })
  }

  componentDidMount () {
    getProducts()
    .then(products => {
      this.setState(state => {
        return {
          ...state,
          products,
        }
      })
    })
  }

  componentWillReceiveProps () {
    // update state based on new props or trigger some side effect
  }

  componentWillUnmount () {
    // Clean up any listeners etc
  }

  render() {
    const pagePropsMapping = {
      'product-list': {
        onProductClick: this.handleProductClick,
        onAddToCart: this.onAddToCart
      },
      'product-details': {
        onBack: this.onBack,
        onAddToCart: this.onAddToCart
      },
      'cart-details': {
        cart: this.cart
      }
    }

    const CurrentPage = switchFn(pageMapping, this.state.currentPage)
    const pageProps = switchFn(pagePropsMapping, this.state.currentPage)

    console.log(pageProps)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <span onClick={this.goToCart}>
            <Cart products={this.state.cart} />
          </span>
        </header>

        <div className="page-wrapper">
          <CurrentPage {...this.state} {...pageProps} />
        </div>
      </div>
    );     
  }
}

export default App;
