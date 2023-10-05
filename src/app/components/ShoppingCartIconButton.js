'use client';
import styled from 'styled-components';
import React from 'react';
import { ShoppingCart, CheckCircle } from 'react-feather';
import { useCart } from '../hooks/useCart';

export default function ShoppingCartIconButton({ product }) {
  const { addToShoppingCart, products, removeFromShoppingCart } = useCart();
  const [ isAdded, setIsAdded ] = React.useState(false);

  React.useEffect(() => {
    setIsAdded(products.some(({ name }) => name === product.name));
  }, [products, product.name])


  return (
    <>
      {
        isAdded ? (
          <CheckCircle size={30} color='green'  onClick={() => removeFromShoppingCart(product)} />
        ) : (
          <ShoppingCart size={30} color='orange' onClick={() => addToShoppingCart(product)} />
        )
      }
    </>
  )
}