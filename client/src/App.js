import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import WrappedApp from "./components/food"
import WrappedDemo from "./components/food"
import './components/forms/forms.css';
import Forms from "./components/forms";
import './utils/API.js';
import Cart from './components/cart';
import './components/cart/cart.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/cart" component={Cart} />
        </div>
     </Router> 
    );
  }
}

export default App;
