'use client';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useCart, SERVICE_COST, TAX_COST } from '../hooks/useCart';
import Button from './Button';
import Modal from './Modal';

export default function Checkout() {
  const { total, subtotal, cartCount, reset } = useCart();
  const [confirmedTotal, setConfirmedTotal] = useState(null);
  const isEmpty = Number(total) === 0;
  const ref = (cartCount * 271 + Math.floor(Number(subtotal) * 100))
    .toString(16)
    .toUpperCase()
    .padStart(4, '0')
    .slice(-4);

  const handleCheckout = () => setConfirmedTotal(total);
  const handleClose = () => {
    setConfirmedTotal(null);
    reset();
  };

  return (
    <>
      <Card aria-labelledby="summary-heading">
        <Header>
          <Marker>※</Marker>
          <HeaderTitle id="summary-heading">Ledger</HeaderTitle>
          <HeaderRef>REF/{ref}</HeaderRef>
        </Header>

        <Rule />

        <Rows>
          <Row>
            <Label>Subtotal</Label>
            <Dots aria-hidden="true" />
            <Value>${subtotal}</Value>
          </Row>
          <Row>
            <Label>Shipping</Label>
            <Dots aria-hidden="true" />
            <Value>${SERVICE_COST}</Value>
          </Row>
          <Row>
            <Label>Tax</Label>
            <Dots aria-hidden="true" />
            <Value>${TAX_COST}</Value>
          </Row>
        </Rows>

        <Rule $bold />

        <TotalRow>
          <TotalLabel>Total</TotalLabel>
          <TotalValue>${total}</TotalValue>
        </TotalRow>

        <Button
          onClick={handleCheckout}
          disabled={isEmpty}
          $size="lg"
          $fullWidth
          aria-describedby={isEmpty ? 'checkout-hint' : undefined}
        >
          [ Checkout → ]
        </Button>
        {isEmpty && <Hint id="checkout-hint">+ ADD A COFFEE TO CONTINUE</Hint>}
      </Card>

      <Modal
        open={confirmedTotal !== null}
        onClose={handleClose}
        title="Order placed."
      >
        <ModalCopy>
          We received your order — <Strong>${confirmedTotal ?? '0'}</Strong> for{' '}
          <Strong>{cartCount} {cartCount === 1 ? 'item' : 'items'}</Strong>.
          A confirmation will arrive shortly. Thanks for not ordering a lavender mocha.
        </ModalCopy>
        <ModalActions>
          <Button as={Link} href="/products" $size="md" onClick={handleClose}>
            [ Keep shopping → ]
          </Button>
          <Button $variant="ghost" onClick={handleClose}>
            Close
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
}

const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  background: var(--bone);
  border: var(--rule-w-2) solid var(--ink);
  padding: var(--space-5);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const Marker = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.875rem;
`;

const HeaderTitle = styled.h2`
  flex: 1;
  font-family: var(--font-display), serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
`;

const HeaderRef = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  color: var(--muted);
  letter-spacing: 0.06em;
`;

const Rule = styled.hr`
  border: 0;
  border-top: ${(p) => (p.$bold ? 'var(--rule-w-2)' : 'var(--rule-w)')} solid var(--ink);
`;

const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: var(--space-2);
  align-items: baseline;
  font-family: var(--font-mono), monospace;
  font-size: 0.8125rem;
`;

const Label = styled.span`
  color: var(--ink);
`;

const Dots = styled.span`
  border-bottom: var(--rule-w) dotted var(--muted);
  height: 0.6em;
`;

const Value = styled.span`
  color: var(--ink);
  font-variant-numeric: tabular-nums;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const TotalLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink);
`;

const TotalValue = styled.span`
  font-family: var(--font-display), serif;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
`;

const Hint = styled.p`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: var(--muted);
  text-align: center;
`;

const ModalCopy = styled.p`
  font-family: var(--font-body), sans-serif;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--ink-2);
`;

const Strong = styled.strong`
  font-family: var(--font-mono), monospace;
  font-weight: 600;
  background: var(--accent);
  color: var(--accent-ink);
  padding: 0 4px;
`;

const ModalActions = styled.div`
  display: flex;
  gap: var(--space-3);
  margin-top: var(--space-2);
  flex-wrap: wrap;
`;
