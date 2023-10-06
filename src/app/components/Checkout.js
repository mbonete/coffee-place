'use client'
import React from 'react';
import styled from 'styled-components';
import { useCart, SERVICE_COST, TAX_COST } from "../hooks/useCart";



export default function Checkout(){
  const { total, subtotal } = useCart();
  console.log('debug', total, typeof total, total === 2.99)
  
  return(

    <CheckoutWrapper>
        <CheckoutBox>
          <Bold>Subtotal</Bold>
          <Price style={{display:'grid', justifyItems: 'end'}}>${subtotal}</Price>
          <Bold>Shipping cost</Bold>
          <Price style={{display:'grid', justifyItems: 'end'}}>${SERVICE_COST}</Price>
          <Bold>Tax</Bold>
          <Price style={{display:'grid', justifyItems: 'end'}}>${TAX_COST}</Price>
          
        </CheckoutBox>
        <Total>
          <Bold>Total</Bold>
          <Bold style={{display:'grid', justifyItems: 'end'}}>${total == 2.99 ? 0 : total}</Bold>
        </Total>
        <CheckoutButton>Checkout</CheckoutButton>
      </CheckoutWrapper>
  )
}


const CheckoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 48px;
  max-height: 60%;
  min-height: 400px;
  gap: 48px;
  border: 1px solid orange;
  padding: 32px;
  
  @media (max-width: 850px){
    margin: 8px;
    padding: 16px;

  }

`;
const CheckoutBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
  
`;
const Total = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  border-top: 1px solid gray;
  padding-top: 24px;


`;

const CheckoutButton = styled.button`
  border-radius: 4px;
  background-color: orange;
  color: black;
  padding: 8px 16px;
`;

const Bold = styled.span`
  font-weight: 600;
  //ellipsis
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;

`;
const Price = styled.span`
  font-weight: 400;
  font-size: 1rem;
`;