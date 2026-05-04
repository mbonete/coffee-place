'use client';
import React, { useCallback, useMemo, useState } from 'react';
import products from '../products';

const CartContext = React.createContext({});

export const SERVICE_COST = '2';
export const TAX_COST = '0.99';
export const TOTAL_FEES = parseFloat(Number(SERVICE_COST) + Number(TAX_COST)).toFixed(2);

export const CartProvider = ({ children }) => {
  const [cartLines, setCartLines] = useState({});

  const addToShoppingCart = useCallback((productId) => {
    setCartLines((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  }, []);

  const removeFromShoppingCart = useCallback((productId) => {
    setCartLines((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  }, []);

  const incrementQuantity = useCallback((productId) => {
    setCartLines((prev) => ({ ...prev, [productId]: (prev[productId] ?? 0) + 1 }));
  }, []);

  const decrementQuantity = useCallback((productId) => {
    setCartLines((prev) => {
      const current = prev[productId] ?? 0;
      if (current <= 1) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: current - 1 };
    });
  }, []);

  const changeQuantity = useCallback((productId, quantity) => {
    setCartLines((prev) => {
      if (quantity <= 0) {
        const next = { ...prev };
        delete next[productId];
        return next;
      }
      return { ...prev, [productId]: quantity };
    });
  }, []);

  const reset = useCallback(() => setCartLines({}), []);

  const { subtotal, total, cartCount } = useMemo(() => {
    const count = Object.values(cartLines).reduce((acc, q) => acc + q, 0);
    const sub = Object.keys(cartLines).reduce(
      (acc, productId) => acc + Number(products[productId].price) * cartLines[productId],
      0,
    );
    if (sub === 0) {
      return { subtotal: '0', total: '0', cartCount: count };
    }
    const tot = sub + Number(SERVICE_COST) + Number(TAX_COST);
    return {
      subtotal: parseFloat(sub).toFixed(2),
      total: parseFloat(tot).toFixed(2),
      cartCount: count,
    };
  }, [cartLines]);

  const value = useMemo(
    () => ({
      addToShoppingCart,
      removeFromShoppingCart,
      incrementQuantity,
      decrementQuantity,
      changeQuantity,
      reset,
      cartLines,
      cartCount,
      total,
      subtotal,
    }),
    [
      addToShoppingCart,
      removeFromShoppingCart,
      incrementQuantity,
      decrementQuantity,
      changeQuantity,
      reset,
      cartLines,
      cartCount,
      total,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => React.useContext(CartContext);
