import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getProducts from './api/Api';
import ProductList from './product-list/ProductList';
import ProductDetails from './product-overview/ProductDetails';

const products = [
  {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100,
   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' },
  {id: 2, name: 'Product 2', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 50,
   text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' }
];

const product = {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100,
text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s' }

class App extends Component {   
  constructor() {
    super();
    this.state = {
      products: []
    }

    this.handleClick = this.handleClick.bind(this);
  } 

  handleClick() {
    getProducts().then(products => {
      this.setState({products: products});
    });
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <button className="button" onClick={this.handleClick}>Get Products!</button>
        </header>
        <ProductList products={this.state.products} />
      </div>
    );     
  }
}

export default App;
