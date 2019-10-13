import React from "react";
import { Store } from "../../store";
import "./style.css";

const ProductList = React.lazy(() => import("../ProductList/index"));

export default function Cart() {
  const { state } = React.useContext(Store);

  const props = {
    products: state.cart,
    cart: state.cart,
    imgWidth: 100,
    imgHeight: 100
  };

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="minicart">
        <h2 className="title">Cart</h2>
        <ProductList {...props} />
        <div>
          <button className="button checkout-button">CHECKOUT</button>
        </div>
      </div>
      >
    </React.Suspense>
  );
}
