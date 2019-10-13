import React from "react";
import { Store } from "../store";
import JsonProducts from "../products";

const ProductList = React.lazy(() => import("../Shared/ProductList/index"));

export default function Category() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.products.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const data = await JsonProducts;
    return dispatch({
      type: "FETCH_DATA",
      payload: data.Products
    });
  };

  const addProduct = product =>
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: product, qty: 1 }
    });

  const props = {
    products: state.products,
    addProduct: addProduct,
    cart: state.cart,
    imgWidth: 250,
    imgHeight: 250
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="category-layout">
          <ProductList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
