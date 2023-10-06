'use client';
import React from 'react';
import products from '../products';

const CartContext = React.createContext({});

export const SERVICE_COST = '2';
export const TAX_COST = '0.99';

export const CartProvider = ({ children }) => {
  const [ cartLines, setCartLines ] = React.useState({});
  const [ subtotal, setSubtotal ] = React.useState(0);
  const [ total, setTotal ] = React.useState(0);

  const updatePricesSummary = (cartLines) => {
    const subtotal = Object
      .keys(cartLines)
      .reduce((acc, productId) => {
        return acc + Number(products[productId].price) * cartLines[productId];
      }, 0);

    const total = subtotal + Number(SERVICE_COST) + Number(TAX_COST);

    setSubtotal(parseFloat(subtotal).toFixed(2));
    setTotal(parseFloat(total).toFixed(2));
  }

  const updateCartLines = (cartLines) => {
    setCartLines(cartLines);
    updatePricesSummary(cartLines);
  };

  const addToShoppingCart = (productId) => {
    updateCartLines({
      ...cartLines,
      [productId]: 1
    });
  };

  const changeQuantity = (productId, quantity) => {
    updateCartLines({
      ...cartLines,
      [productId]: quantity,
    });
  };

  const removeFromShoppingCart = (productId) => {
    const updatedCartLines = { ...cartLines };
    delete updatedCartLines[productId];
    
    updateCartLines(updatedCartLines);
  };

  const value = {
    addToShoppingCart,
    removeFromShoppingCart,
    changeQuantity,
    cartLines,
    total,
    subtotal
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  )
};

export const useCart = () => React.useContext(CartContext);