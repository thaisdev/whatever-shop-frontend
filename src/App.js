import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router";

import { configure } from "axios-hooks";
import Axios from "axios";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";

import "./App.css";

const hist = createBrowserHistory();

const axios = Axios.create({
  baseURL: "http://localhost:3004",
});
configure({ axios });

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
};

export default App;
