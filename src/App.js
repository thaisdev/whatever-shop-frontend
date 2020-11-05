import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';

import './App.css';

const hist = createBrowserHistory();

const App = () => {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default App;
