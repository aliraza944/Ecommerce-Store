import React, { useState, useContext } from "react";
const addToCart = React.createContext();
const updateCart = React.createContext();
export function useCart() {
  return useContext(addToCart);
}
export function useUpdateCart() {
  return useContext(updateCart);
}

export const Store = ({ children }) => {
  const [cart, setCart] = useState(0);
  const setMyCart = () => setCart(cart + 1);

  return (
    <>
      <addToCart.Provider value={cart}>
        <updateCart.Provider value={setMyCart}>{children}</updateCart.Provider>
      </addToCart.Provider>
    </>
  );
};

export default Store;
