import React from "react";
import { Store } from "../store";
import JsonProducts from "../products";
import "./style.css";

export default function App() {
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
      payload: product
    });

  return (
    <React.Fragment>
      {console.log(state)}
      <div className="header">
        <h1>Products</h1>
        <p>bla bla bla bla bla bla</p>
      </div>
      <section className="episode-layout">
        {state.products.map(product => {
          return (
            <section key={product.id} className="episode-box">
              <img
                src={product.imgUrl}
                alt={product.name}
                height={250}
                width={250}
              />
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <button type="button" onClick={() => addProduct(product)}>
                Add
              </button>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
