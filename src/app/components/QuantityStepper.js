'use client';
import styled from 'styled-components';
import { Minus, Plus } from 'react-feather';
import { useCart } from '../hooks/useCart';

export default function QuantityStepper({ productId, productName }) {
  const { cartLines, increment, decrement } = useCart();
  const quantity = cartLines[productId] ?? 0;

  return (
    <Wrapper role="group" aria-label={`Quantity of ${productName}`}>
      <StepButton
        type="button"
        onClick={() => decrement(productId)}
        disabled={quantity === 0}
        aria-label={quantity === 1 ? `Remove ${productName} from cart` : `One less ${productName}`}
      >
        <Minus size={16} strokeWidth={2.75} aria-hidden="true" />
      </StepButton>
      <Count aria-hidden="true">{String(quantity).padStart(2, '0')}</Count>
      <StepButton
        type="button"
        onClick={() => increment(productId)}
        disabled={quantity >= 99}
        aria-label={`One more ${productName}`}
      >
        <Plus size={16} strokeWidth={2.75} aria-hidden="true" />
      </StepButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  background: var(--paper);
  border: 2px solid var(--ink);
  border-radius: 3px;
`;

const StepButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent;
  border: none;
  color: var(--ink);
  cursor: pointer;
  transition: background-color var(--motion-fast) ease, color var(--motion-fast) ease;

  &:hover:not(:disabled) {
    background: var(--ink);
    color: var(--paper);
  }
  &:disabled {
    color: rgb(20 17 15 / 0.3);
    cursor: not-allowed;
  }
  &:focus-visible {
    outline: 3px solid var(--ink);
    outline-offset: 2px;
  }
`;

const Count = styled.span`
  display: grid;
  place-items: center;
  min-width: 40px;
  border-inline: 2px solid var(--ink);
  font-family: var(--font-display), sans-serif;
  font-size: 1rem;
  font-variant-numeric: tabular-nums;
  user-select: none;
`;
