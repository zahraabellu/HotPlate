"use client";
import { createContext, useState } from "react";
export const AppContext = createContext();
export default function AppProvider({ children }) {
  const [selectedType, setSelectedType] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  const addToCartIndi = (product) => {};
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <AppContext.Provider
        value={{
          selectedType,
          setSelectedType,
          cartItems,
          setCartItems,
          addToCart,
          totalQuantity,
          totalPrice,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
}
