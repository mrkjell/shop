import React from "react";
import { Store } from "../store";
import { Link } from "@reach/router";
import Cart from "../Shared/Cart/index";

export default function App(props) {
  const { state, dispatch } = React.useContext(Store);

  const toggleCart = () =>
    dispatch({
      type: "TOGGLE_CART",
      payload: !state.cartIsOpen
    });

  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Products</h1>
        </div>
        <div>
          <Link to="/">Home</Link>
          {"   "}
          <Link to="/category">Category</Link>
          {"   "}
          <button onClick={() => toggleCart()}>Cart {state.cart.length}</button>
        </div>
      </header>
      {props.children}
      {state.cart.length > 0 && state.cartIsOpen && <Cart />}
    </React.Fragment>
  );
}
