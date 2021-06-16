import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CartManipulation from "./store/CartManipulation";

ReactDOM.render(
  <CartManipulation>
    <App />
  </CartManipulation>,
  document.getElementById("root")
);
