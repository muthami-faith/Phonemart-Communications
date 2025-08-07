// CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const removeFromCart = (productToRemove) => {
  setCartItems((prevItems) =>
    prevItems.filter(
      (item) =>
        item.id !== productToRemove.id ||
        item.selectedStorage !== productToRemove.selectedStorage
    )
  );
};


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
