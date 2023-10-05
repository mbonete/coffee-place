'use client';
import styled from 'styled-components';
import React from 'react';
import { ShoppingCart, CheckCircle } from 'react-feather';
import { useCart } from '../hooks/useCart';

export default function ShoppingCartIconButton({ product }) {
  const { productId } = product;
  const { addToShoppingCart, cartLines, removeFromShoppingCart } = useCart();
  const [ isAdded, setIsAdded ] = React.useState(false);

  React.useEffect(() => {
    const hasPositiveQuantity = Boolean(cartLines[productId] > 0);
    setIsAdded(hasPositiveQuantity);
  }, [cartLines, productId])

  return (
    <>
      {
        isAdded ? (
          <CheckCircle size={30} color='green'  onClick={() => removeFromShoppingCart(productId)} />
        ) : (
          <ShoppingCart size={30} color='orange' onClick={() => addToShoppingCart(productId)} />
        )
      }
    </>
  )
}