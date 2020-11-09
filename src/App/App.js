import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Home from "../components/pages/home";
import cateiringSochi from "../components/pages/cateiringSochi";
import arendaPage from "../components/pages/arenda";
import menuPage from "../components/pages/menuPage";
import cart from "../components/pages/cart";
import contactsPage from "../components/pages/contactsPage";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/catering-sochi" component={cateiringSochi} />
            <Route path="/arenda" component={arendaPage} />
            <Route path="/menu" component={menuPage} />
            <Route path="/contacts" component={contactsPage} />
            <Route path="/cart" component={cart} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
