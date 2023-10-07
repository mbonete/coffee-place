'use client';
import styled from 'styled-components';
import React from 'react';
import { ShoppingCart, CheckCircle } from 'react-feather';
import { useCart } from '../hooks/useCart';

export default function ShoppingCartIconButton({ product }) {
  const { productId } = product;
  const { addToShoppingCart, cartLines, removeFromShoppingCart } = useCart();

  const isAdded = cartLines[productId] > 0

  const handleToggle = () => {
    isAdded ? removeFromShoppingCart(productId) : addToShoppingCart(productId)
  }

  return (
    <Button onClick={handleToggle}>
      {
        isAdded ? (
          <CheckCircle size={30} color='green'/>
        ) : (
          <ShoppingCart size={30} color='orange'/>
        )
      }
    </Button>
  )
}

const Button = styled.button`
  background-color: white;
  border: white;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:active {
    transform: scale(0.9)
  }
`;