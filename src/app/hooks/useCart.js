'use client';
import React from 'react';

const CartContext = React.createContext({});

export const CartProvider = ({children}) => {

  const [ products, setProducts ] = React.useState([]);

  const addToShoppingCart = (product) => {
    setProducts([...products, product]);
  }

  const removeFromShoppingCart = (product) => {
    const index = products.findIndex((p) => p.name === product.name);
    setProducts(products.toSpliced(index, 1));
  }

  const value = {
    addToShoppingCart,
    removeFromShoppingCart,
    products,
  }

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
}

export const useCart = () => React.useContext(CartContext);