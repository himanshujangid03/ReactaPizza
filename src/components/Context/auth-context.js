import React, { useState } from "react";
import { API } from "./api";

const AuthContext = React.createContext({
  cartItem: Array,
  addToCartHandler: (item) => {},
  setCartItem: () => {},
  setSortQuery: () => {},
  sortQuery: API,
});

export const AuthContextProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  const [sortQuery, setSortQuery] = useState(API);

  const addToCartHandler = (item) => {
    const cartItemId = cartItem.some((el) => {
      if (el._id === item._id) return true;
      else return false;
    });

    if (!cartItemId) {
      setCartItem((el) => {
        return [...el, item];
      });
    } else {
      window.alert("Item is already to cart!");
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          addToCartHandler: addToCartHandler,
          cartItem: cartItem,
          sortQuery: sortQuery,
          setSortQuery: setSortQuery,
          setCartItem: setCartItem,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
