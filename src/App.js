import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  getProducts, 
  getProductById,
} from './services/products';
import ProductList from './product-list/ProductList';
import ProductDetails from './product-overview/ProductDetails';


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
}


class App extends Component {
  state = {
    currentPage: 'product-list',
    products: null,
    product: null,
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

    // var product = getProductById(1)
    //   .then((product)=> {
    //     this.state.product = {product};
    //     console.log(this.state.product)
    //   })
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
    const CurrentPage = switchFn(pageMapping, this.state.currentPage)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div className="page-wrapper">
          <CurrentPage {...this.state} onProductClick={this.handleProductClick} />
        </div>
      </div>
    );     
  }
}

export default App;
