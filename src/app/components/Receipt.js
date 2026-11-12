'use client';
import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import products from '../products';
import { useCart, formatPrice, TAX_RATE } from '../hooks/useCart';
import { pinkedBottom } from '../lib/paper';
import Button from './Button';

const timeFormat = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  month: 'short',
  hour: '2-digit',
  minute: '2-digit',
});

// The order ticket. Every change to the cart prints itself as a line here.
// `paid` is owned by the cart page so the rest of the page can react to a placed order.
export default function Receipt({ paid, onPaid, onTornOff }) {
  const { cartLines, subtotal, service, tax, total, cartCount, reset, hydrated } = useCart();
  // Captured once on the client; only shown after hydration so server and client markup agree.
  const [printedAt] = useState(() => timeFormat.format(new Date()));
  const [tearing, setTearing] = useState(false);

  const live = {
    lines: Object.entries(cartLines).map(([id, qty]) => ({ id, qty })),
    subtotal,
    service,
    tax,
    total,
    count: cartCount,
  };
  const ticket = paid ?? live;
  const isEmpty = ticket.count === 0;

  const handlePay = () => {
    const orderNo = String(1000 + Math.floor(Math.random() * 9000));
    onPaid({ ...live, orderNo, time: timeFormat.format(new Date()) });
    reset();
  };

  const handleTearOff = () => setTearing(true);
  const handleTorn = (e) => {
    if (e.target !== e.currentTarget || !tearing) return;
    setTearing(false);
    onTornOff();
  };

  return (
    <Wrap>
      <Paper $tearing={tearing} onAnimationEnd={handleTorn} aria-labelledby="receipt-title">
        <Head>
          <ShopName id="receipt-title">The Coffee Place</ShopName>
          <HeadLine>Order ticket</HeadLine>
          <HeadLine>{paid?.time ?? (hydrated ? printedAt : '')}&nbsp;</HeadLine>
        </Head>

        <Rule />

        {!hydrated ? (
          <Quiet>Warming up the printer…</Quiet>
        ) : isEmpty ? (
          <Quiet>Nothing printed yet.</Quiet>
        ) : (
          <Items>
            {ticket.lines.map(({ id, qty }) => (
              <Item key={`${id}:${qty}`}>
                <span>
                  {qty} × {products[id].name}
                </span>
                <Leader aria-hidden="true" />
                <span>{formatPrice(Number(products[id].price) * qty)}</span>
              </Item>
            ))}
          </Items>
        )}

        <Rule />

        <Sums>
          <Sum>
            <span>Subtotal</span>
            <Leader aria-hidden="true" />
            <span>{formatPrice(ticket.subtotal)}</span>
          </Sum>
          <Sum>
            <span>Service</span>
            <Leader aria-hidden="true" />
            <span>{formatPrice(ticket.service)}</span>
          </Sum>
          <Sum>
            <span>Tax {Math.round(TAX_RATE * 100)}%</span>
            <Leader aria-hidden="true" />
            <span>{formatPrice(ticket.tax)}</span>
          </Sum>
        </Sums>

        <TotalRow>
          <span>Total</span>
          <TotalValue>${formatPrice(ticket.total)}</TotalValue>
        </TotalRow>

        {paid ? (
          <>
            <PaidStamp aria-hidden="true">Paid</PaidStamp>
            <PaidNote role="status">
              Paid. Order N° {paid.orderNo}. Ready at the counter in about four minutes.
            </PaidNote>
            <Button $variant="ink" $fullWidth onClick={handleTearOff} disabled={tearing}>
              Tear off, start over
            </Button>
          </>
        ) : (
          <Button $variant="action" $fullWidth onClick={handlePay} disabled={!hydrated || isEmpty}>
            {isEmpty ? 'Pay' : `Pay $${formatPrice(ticket.total)}`}
          </Button>
        )}

        <Footnote>A demo checkout: no card is ever charged.</Footnote>
      </Paper>
    </Wrap>
  );
}

const printIn = keyframes`
  from { clip-path: inset(0 0 100% 0); transform: translateY(-6px); background-color: rgb(20 17 15 / 0.08); }
  to   { clip-path: inset(0 0 0 0); transform: translateY(0); background-color: transparent; }
`;

const tearOff = keyframes`
  0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
  25%  { transform: translateY(-10px) rotate(-1.5deg); opacity: 1; }
  100% { transform: translateY(120px) rotate(7deg); opacity: 0; }
`;

const stampIn = keyframes`
  from { transform: rotate(-14deg) scale(1.5); opacity: 0; }
  to   { transform: rotate(-14deg) scale(1); opacity: 1; }
`;

const Wrap = styled.div`
  max-width: 420px;
  margin-inline: auto;
`;

const Paper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  padding: var(--space-8) var(--space-6) var(--space-10);
  background: var(--receipt);
  color: var(--ink);
  font-family: var(--font-receipt), monospace;
  font-size: 0.9375rem;
  line-height: 1.4;
  text-transform: uppercase;
  filter: var(--shadow-sachet);
  ${pinkedBottom('12px')}

  ${(p) =>
    p.$tearing &&
    css`
      animation: ${tearOff} 620ms var(--ease-in-out) forwards;
    `}
`;

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  text-align: center;
`;

const ShopName = styled.h2`
  font-family: var(--font-receipt), monospace;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: 0.08em;
`;

const HeadLine = styled.p`
  letter-spacing: 0.06em;
  color: var(--ink-soft);
`;

const Rule = styled.hr`
  border: 0;
  border-top: 2px dashed rgb(20 17 15 / 0.55);
`;

const Quiet = styled.p`
  padding: var(--space-4) 0;
  text-align: center;
  color: var(--ink-soft);
`;

const Items = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const row = css`
  display: grid;
  grid-template-columns: auto minmax(12px, 1fr) auto;
  align-items: baseline;
  gap: var(--space-2);
`;

const Item = styled.li`
  ${row}
  animation: ${printIn} 360ms steps(6, end);
`;

const Leader = styled.span`
  border-bottom: 2px dotted rgb(20 17 15 / 0.4);
  transform: translateY(-4px);
`;

const Sums = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Sum = styled.p`
  ${row}
  color: var(--ink-soft);
`;

const TotalRow = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 600;
  letter-spacing: 0.06em;
`;

const TotalValue = styled.span`
  font-size: 2rem;
  letter-spacing: 0;
`;

const PaidStamp = styled.span`
  align-self: center;
  margin: var(--space-2) 0;
  padding: 2px 14px;
  border: 5px solid var(--ink);
  border-radius: 4px;
  color: var(--ink);
  font-family: var(--font-display), sans-serif;
  font-size: 3.25rem;
  line-height: 1;
  text-transform: uppercase;
  mix-blend-mode: multiply;
  pointer-events: none;
  animation: ${stampIn} 260ms var(--ease-out) both;
`;

const PaidNote = styled.p`
  text-transform: none;
  font-family: var(--font-body), sans-serif;
  font-size: 1rem;
  font-weight: 500;
`;

const Footnote = styled.p`
  text-transform: none;
  font-family: var(--font-body), sans-serif;
  font-size: 0.875rem;
  color: var(--ink-soft);
  text-align: center;
`;
