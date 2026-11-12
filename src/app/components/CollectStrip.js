'use client';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { ArrowRight } from 'react-feather';
import { series, SERIES_SIZE } from '../products';
import { useCart } from '../hooks/useCart';
import { QUERIES } from '../lib/breakpoints';
import { pinkedY, crimp } from '../lib/paper';

// The collector's card: a slot for each sachet, inked in once it is in your cart.
export default function CollectStrip() {
  const { cartLines, hydrated } = useCart();
  const collected = series.filter((p) => cartLines[p.productId] > 0).length;

  const status =
    !hydrated || collected === 0
      ? 'Nothing collected yet.'
      : collected === SERIES_SIZE
        ? 'The full set. A serious collector.'
        : `${collected} of ${SERIES_SIZE} collected.`;

  return (
    <Section aria-labelledby="collect-heading">
      <Header>
        <Heading id="collect-heading">Collect the series.</Heading>
        <Status aria-live="polite">{status}</Status>
      </Header>

      <Slots>
        {series.map((p) => {
          const filled = hydrated && cartLines[p.productId] > 0;
          return (
            <SlotItem key={p.productId}>
              <SlotLink href={`/products/${p.productId}`} aria-label={`${p.name}${filled ? ', in your cart' : ''}`}>
                <Mini style={{ '--spot': p.ink }}>
                  <Band $filled={filled}>
                    <MiniNumber aria-hidden="true">{p.number}</MiniNumber>
                  </Band>
                  <MiniPrint aria-hidden="true">
                    N° {p.number}/{SERIES_SIZE}
                  </MiniPrint>
                </Mini>
                <SlotName>{p.name}</SlotName>
              </SlotLink>
            </SlotItem>
          );
        })}
      </Slots>

      {hydrated && collected > 0 && (
        <CartLink href="/shopping-cart">
          See your cart
          <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
        </CartLink>
      )}
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  max-width: var(--page-max);
  margin: var(--space-24) auto 0;
  padding: 0 var(--gutter);
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;

const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-8);
`;

const Heading = styled.h2`
  font-size: clamp(2.25rem, 4.4vw, 3.75rem);
`;

const Status = styled.p`
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--table-ink);
`;

const Slots = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: clamp(12px, 2vw, 32px);

  @media ${QUERIES.mobile} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: var(--space-6);
  }
`;

const SlotItem = styled.li`
  min-width: 0;
`;

const SlotLink = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--ink);
`;

const Mini = styled.span`
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 5 / 7;
  container-type: inline-size;
  background: var(--paper);
  color: var(--ink);
  filter: var(--shadow-sachet);
  ${pinkedY('8px')}
  transition: transform 300ms var(--ease-out);

  /* crimped seams */
  &::before,
  &::after {
    content: '';
    flex: none;
    height: 8cqw;
    ${crimp}
  }
  &::after {
    margin-top: auto;
  }

  ${SlotLink}:hover & {
    transform: translateY(-4px);
  }
`;

/* The ink band: a faint screen of the drink's ink until it is in your cart, then solid. */
const Band = styled.span`
  display: grid;
  place-items: center;
  height: 48%;
  margin: 8cqw 9cqw 0;
  border: 2px solid var(--spot);
  background-image: radial-gradient(var(--spot) 0.9px, transparent 1.2px);
  background-size: 6px 6px;
  color: var(--spot);
  transition: background-color 300ms var(--ease-out), color 300ms var(--ease-out);

  ${(p) =>
    p.$filled &&
    css`
      background-color: var(--spot);
      background-image: radial-gradient(rgb(255 255 255 / 0.16) 1.1px, transparent 1.4px);
      color: #fff;
    `}
`;

const MiniPrint = styled.span`
  margin: 5cqw 9cqw 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: clamp(10px, 9cqw, 14px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const MiniNumber = styled.span`
  font-family: var(--font-display), sans-serif;
  font-size: 30cqw;
  line-height: 1;
`;

const SlotName = styled.span`
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  line-height: 1.1;
`;

const CartLink = styled(Link)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 2.5px dashed var(--ink);
`;
