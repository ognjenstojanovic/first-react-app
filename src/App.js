import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getProducts, getProductById } from './api/Api';
import ProductList from './product-list/ProductList';
import ProductDetails from './product-overview/ProductDetails';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 const products1 = [
  {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100,
   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
  {id: 2, name: 'Product 2', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 50,
   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' }
];

const product1 = {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100,
text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' } 

class App extends Component {   
  constructor() {
    super();
   
    this.state = {
      products: [],
      product: []
    }

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
      var products = getProducts()
      .then((products) => {
        this.state.products = {products};
        console.log(this.state.products);
        console.log(this.state.products.products);
      })
      
  }

  handleProductClick() {
    var product = getProductById(1)
      .then((product)=> {
        this.state.product = {product};
        console.log(this.state.product)
      })
   
}

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            <Link to="/products" onClick={this.handleClick}>Get Products! </Link>
            
            <Link to="/details" onClick={this.handleProductClick}> Get Product 1</Link>

          <Route path="/products" render = { (props) => <ProductList products={this.state.products} /> } />
          <Route path="/details" render = { () => <ProductDetails product={this.state.product} /> } />
          </div>
        </Router>
       {/* <ProductList products={products1} /> */}
      </div>
    );     
  }
}

export default App;
