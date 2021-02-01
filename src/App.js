import React, { Component } from "react";
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import ListeProduct from "./Components/ListeProduct";
import Product from "./Components/Product";
import Apropos from "./Components/Apropos";
import ContactForm from "./Components/ContactForm";
import Footer from "./Components/Footer";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

class App extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/Christophe-png/wise-products/wise-products"
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    const { products, nameFilter } = this.state;

    return (
      <div className="App">
        <Router>
          <Header className="header"></Header>
          <Switch>
            <Route exact path="/">
              <ListeProduct products={products} />
            </Route>
            <Route path="/product">
              <ListeProduct products={products} />
            </Route>
            <Route path="a-propos" component={Apropos} />
            <Route path="/contact-form" component={ContactForm} />
            <HomePage />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
