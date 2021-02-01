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
    collectionFilter: "",
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
    const { products, collectionFilter } = this.state;
    const filteredProducts =
      collectionFilter === ""
        ? products
        : products.filter((product) => product.collection === collectionFilter);
    return (
      <div className="App">
        <Router>
          <Header className="header">
            <div>
              <label htlmFor="collectionSelect">
                Collection{""}
                <select
                  id="collectionSelect"
                  value={collectionFilter}
                  onChange={this.handleChangeCollection}
                >
                  <option value="">&mdash;</option>
                  <option value="Traileuse Haut">Traileuse Haut</option>
                  <option value="Traileuse Bas">Traileuse Bas</option>
                  <option value="Traileur Haut">Traileur Haut</option>
                  <option value="Traileur Bas">Traileur Bas</option>
                  <option value="Accessoires">Accessoires</option>
                </select>
              </label>
            </div>
          </Header>
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
          <Footer className="footer"></Footer>
        </Router>
      </div>
    );
  }
}

export default App;
