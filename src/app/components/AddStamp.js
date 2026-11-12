'use client';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Plus } from 'react-feather';
import { useCart } from '../hooks/useCart';

// A rubber stamp in the house red: the only red on the page is the red you can press.
export default function AddStamp({ productId, productName, large = false }) {
  const { cartLines, increment } = useCart();
  const [pressKey, setPressKey] = useState(0);
  const quantity = cartLines[productId] ?? 0;
  const inCart = quantity > 0;

  return (
    <Stamp
      type="button"
      $inCart={inCart}
      $large={large}
      $press={pressKey}
      onClick={() => {
        increment(productId);
        setPressKey((k) => k + 1);
      }}
      aria-label={
        inCart ? `Add another ${productName}. ${quantity} in cart.` : `Add ${productName} to cart`
      }
    >
      <Plus size={large ? 18 : 15} strokeWidth={3} aria-hidden="true" />
      <span>Add</span>
      {inCart && <InCart aria-hidden="true">{quantity}</InCart>}
    </Stamp>
  );
}

// Two identical keyframes so every press restarts the animation without remounting (keeps focus).
const thunkFrames = `
  0%   { transform: rotate(-7deg) scale(1.22); }
  55%  { transform: rotate(-7deg) scale(0.94); }
  100% { transform: rotate(-7deg) scale(1); }
`;
const thunkA = keyframes`${thunkFrames}`;
// styled-components names keyframes by content hash; a no-op difference keeps the names distinct.
const thunkB = keyframes`${thunkFrames} 99.99% { transform: rotate(-7deg) scale(1); }`;

const Stamp = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 36px;
  padding: 4px 12px 4px 9px;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  white-space: nowrap;
  color: var(--house);
  background: var(--paper);
  border: 3px solid var(--house);
  border-radius: 3px;
  transform: rotate(-7deg);
  cursor: pointer;
  transition:
    background-color var(--motion-fast) ease,
    color var(--motion-fast) ease;

  /* a bigger hit area than the stamp itself */
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
  }

  &:hover {
    background: var(--house);
    color: #fff;
  }
  &:active {
    transform: rotate(-7deg) scale(0.96);
  }
  &:focus-visible {
    outline: 3px solid var(--ink);
    outline-offset: 3px;
  }

  ${(p) =>
    p.$inCart &&
    css`
      background: var(--house);
      color: #fff;
      &:hover {
        background: var(--house-deep);
        border-color: var(--house-deep);
      }
    `}

  ${(p) =>
    p.$large &&
    css`
      min-height: 44px;
      padding: 6px 16px 6px 12px;
      font-size: 1.1875rem;
      border-width: 3.5px;
    `}

  ${(p) =>
    p.$press > 0 &&
    css`
      animation: ${p.$press % 2 ? thunkA : thunkB} 360ms var(--ease-out);
    `}
`;

const InCart = styled.span`
  display: inline-grid;
  place-items: center;
  min-width: 1.45em;
  height: 1.45em;
  margin-left: 2px;
  padding: 0 4px;
  border-radius: 999px;
  background: #fff;
  color: var(--house);
  font-family: var(--font-display), sans-serif;
  font-size: 0.8125em;
  letter-spacing: 0;
  line-height: 1;
`;
