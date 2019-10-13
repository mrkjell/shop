import React from "react";

export const Store = React.createContext();

const initialState = {
  products: [],
  cart: []
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}