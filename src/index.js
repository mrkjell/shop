import React from "react";
import ReactDOM from "react-dom";
import App from "./App/index";
import Home from "./Home/index";
import Category from "./Category/index";
import { StoreProvider } from "./store";
import { Router } from "@reach/router";
import "./style.css";

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path="/">
        <Home path="/" />
        <Category path="/category" />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
);
