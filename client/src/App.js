import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import WrappedApp from "./components/food"
=======
//import NavBar from "./components/navbar"
>>>>>>> master
import WrappedDemo from "./components/food"
import './components/forms/forms.css';
import './components/about/about.css';
import './components/home/home.css';
import './components/contact/index.css';
import Forms from "./components/forms";
<<<<<<< HEAD
import './utils/API.js';
import Cart from './components/cart';
import './components/cart/cart.css';
=======
// import About from "./components/about";
import ContactForm from "./components/contact";
// import Home from "./components/home";
// import './utils/API.js'
// import './utils/loginAPI.js'
import WrappedLogin from './components/customersignin';
import './components/customersignin/customersignin.css';

>>>>>>> master

class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <div className="App">
          <Route path="/cart" component={Cart} />
        </div>
=======
      <div className="App">
      {/* <Navbar /> */}
        <header className="App-header">   
          <h1 className="App-title">Welcome to Meal Ticket!</h1>

        </header>

      <Forms /> 

      <WrappedLogin />
      <ContactForm />


      </div>
>>>>>>> master
     </Router> 
    );
  }
}

export default App;
