'use client';
import React from 'react';

const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {

  const [ cartLines, setCartLines ] = React.useState({});

  const addToShoppingCart = (productId) => {
    setCartLines({
      ...cartLines,
      [productId]: 1
    });
  };

  const changeQuantity = (productId, quantity) => {
    setCartLines({
      ...cartLines,
      [productId]: quantity,
    });
  };

  const removeFromShoppingCart = (productId) => {
    const updatedCartLines = { ...cartLines };
    delete updatedCartLines[productId];
    
    setCartLines(updatedCartLines);
  };

  const value = {
    addToShoppingCart,
    removeFromShoppingCart,
    changeQuantity,
    cartLines, 
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};

export const useCart = () => React.useContext(CartContext);