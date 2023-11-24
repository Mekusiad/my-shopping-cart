import { createContext, useState } from "react";

import { PRODUCTS } from "../products";

export const ShoppingContext = createContext(null);

const getDefault = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShoppingContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefault());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const totalAmountEachItem = (id) => {
    let totalAmountEach = 0;

    for (const i in PRODUCTS) {
      if (PRODUCTS[i].id === id) {
        const und = cartItems[id] > 0 ? cartItems[id] : 1;
        totalAmountEach = und * PRODUCTS[i].price;

        return totalAmountEach.toFixed(2);
      }
    }
  };

  const totalAmountItems = () => {
    let totalAmount = 0;
    for (const i in PRODUCTS) {
      if (PRODUCTS[i].id > 0) {
        totalAmount += cartItems[Number(i) + 1] * PRODUCTS[i].price;
      }
    }
    return totalAmount.toFixed(2);
  };

  const updateInputShop = (itemId, newValue) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Number(newValue) }));
  };

  const context = {
    cartItems,
    addToCart,
    removeToCart,
    updateInputShop,
    totalAmountEachItem,
    totalAmountItems,
  };

  return (
    <ShoppingContext.Provider value={context}>
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
