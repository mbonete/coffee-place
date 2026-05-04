'use client';
import styled from 'styled-components';
import { useCart } from '../hooks/useCart';

export default function QuantityStepper({ productId, productName }) {
  const { cartLines, incrementQuantity, decrementQuantity } = useCart();
  const quantity = cartLines[productId] ?? 0;

  return (
    <Wrapper role="group" aria-label={productName ? `Quantity for ${productName}` : 'Quantity'}>
      <StepButton
        onClick={() => decrementQuantity(productId)}
        disabled={quantity === 0}
        aria-label={quantity === 1 ? `Remove ${productName ?? 'item'} from cart` : 'Decrease quantity'}
      >
        −
      </StepButton>
      <Count aria-live="polite">{String(quantity).padStart(2, '0')}</Count>
      <StepButton
        onClick={() => incrementQuantity(productId)}
        aria-label={productName ? `Add ${productName} to cart` : 'Increase quantity'}
      >
        +
      </StepButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: stretch;
  border: var(--rule-w) solid var(--ink);
  background: var(--bone);
  font-family: var(--font-mono), monospace;
`;

const StepButton = styled.button.attrs({ type: 'button' })`
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--ink);
  cursor: pointer;
  transition: background-color var(--motion) var(--easing), color var(--motion) var(--easing);

  &:hover:not(:disabled) {
    background: var(--ink);
    color: var(--bone);
  }
  &:active:not(:disabled) {
    transform: translateY(1px);
  }
  &:disabled {
    color: var(--muted-2);
    cursor: not-allowed;
  }
`;

const Count = styled.span`
  min-width: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-left: var(--rule-w) solid var(--ink);
  border-right: var(--rule-w) solid var(--ink);
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  user-select: none;
`;
