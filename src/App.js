import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getProducts from './api/Api';
import ProductList from './product-list/ProductList';

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
