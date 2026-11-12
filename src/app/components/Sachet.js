'use client';
import { ViewTransition } from 'react';
import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';
import { Scissors } from 'react-feather';
import { SERIES_SIZE } from '../products';
import { formatPrice } from '../hooks/useCart';
import AddStamp from './AddStamp';
import { pinkedY, pinkedBottom, pinkedTop, crimp } from '../lib/paper';

/**
 * One sugar sachet from the series.
 *
 * variant:
 *  - "default": a sachet on the table (menu, home)
 *  - "lead":    the hero sachet, its name printed at a scale that runs off the seam
 *  - "open":    the product page; the top seam is torn off
 *  - "mini":    a thumbnail in the cart
 */
export default function Sachet({
  product,
  variant = 'default',
  rotate = 0,
  index = 0,
  land = false,
  linked = true,
  stamp = true,
  headingLevel = 'h3',
  transition = true,
  priority = false,
}) {
  const { productId, name, price, volume, ink, number, kicker } = product;
  const isMini = variant === 'mini';
  const isOpen = variant === 'open';
  const href = `/products/${productId}`;

  const paper = (
    <Paper $variant={variant}>
      {!isOpen && <Seam aria-hidden="true" />}
      {isOpen && <TornEdge aria-hidden="true" />}
      <InkPanel $variant={variant}>
        {isMini ? (
          <MiniNumber aria-hidden="true">{number}</MiniNumber>
        ) : (
          <Name as={headingLevel} $variant={variant}>
            {linked ? (
              <NameLink href={href} aria-label={`${name}, N° ${number} of ${SERIES_SIZE}, $${formatPrice(price)}`}>
                {name}
              </NameLink>
            ) : (
              name
            )}
          </Name>
        )}
      </InkPanel>
      {!isMini && (
        <>
          <SmallPrint>
            <span>N° {number}/{SERIES_SIZE}</span>
            <span>{volume}</span>
          </SmallPrint>
          {variant !== 'default' || kicker ? <Kicker $variant={variant}>{kicker}</Kicker> : null}
          <Tear aria-hidden="true">
            <Scissors size={12} strokeWidth={2.25} />
            <span>Tear here</span>
          </Tear>
          <Price $variant={variant}>
            <Currency>$</Currency>
            {formatPrice(price)}
          </Price>
        </>
      )}
      <Seam $bottom aria-hidden="true" />
    </Paper>
  );

  return (
    <Wrap
      $variant={variant}
      $land={land}
      style={{ '--spot': ink, '--r': `${rotate}deg`, '--i': index }}
    >
      {isOpen && <TornStrip aria-hidden="true" />}
      {transition ? <ViewTransition name={`sachet-${productId}`}>{paper}</ViewTransition> : paper}
      {stamp && !isMini && (
        <StampSlot $variant={variant}>
          <AddStamp productId={productId} productName={name} large={variant === 'lead' || isOpen} />
        </StampSlot>
      )}
    </Wrap>
  );
}

/* ---------- motion ---------- */

const landIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-48px) rotate(calc(var(--r) - 14deg)) scale(1.08);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotate(var(--r)) scale(1);
  }
`;

const tearAway = keyframes`
  from { transform: translate(0, 0) rotate(0deg); }
  to   { transform: translate(-6%, -78%) rotate(-7deg); }
`;

/* ---------- styles ---------- */

const Wrap = styled.div`
  position: relative;
  transform: rotate(var(--r));
  filter: var(--shadow-sachet);
  transition:
    transform 320ms var(--ease-out),
    filter 320ms var(--ease-out);

  ${(p) =>
    p.$land &&
    css`
      animation: ${landIn} 680ms var(--ease-out) backwards;
      animation-delay: calc(120ms + var(--i) * 95ms);
    `}

  ${(p) =>
    (p.$variant === 'default' || p.$variant === 'lead') &&
    css`
      &:hover,
      &:focus-within {
        transform: translateY(-6px) rotate(calc(var(--r) * 0.4));
        filter: var(--shadow-sachet-lift);
      }
    `}

  ${(p) =>
    p.$variant === 'mini' &&
    css`
      width: 64px;
      flex: none;
      filter: drop-shadow(0 1px 0 rgb(47 74 23 / 0.35)) drop-shadow(0 4px 5px rgb(47 74 23 / 0.28));
    `}
`;

const Paper = styled.article`
  position: relative;
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  aspect-ratio: 5 / 7.2;
  background: var(--paper);
  color: var(--ink);
  ${pinkedY('10px')}

  ${(p) => p.$variant === 'lead' && css`aspect-ratio: 5 / 7;`}
  ${(p) => p.$variant === 'mini' && css`aspect-ratio: 5 / 7; ${pinkedY('6px')}`}
  ${(p) => p.$variant === 'open' && css`${pinkedBottom('10px')}`}
`;

const Seam = styled.div`
  flex: none;
  height: 7cqw;
  min-height: 10px;
  ${crimp}
  ${(p) => (p.$bottom ? css`margin-top: auto;` : '')}
`;

const TornEdge = styled.div`
  flex: none;
  height: 4cqw;
  min-height: 8px;
  background: var(--paper);
  ${pinkedTop('14px')}
`;

const TornStrip = styled.div`
  position: absolute;
  inset: 0 0 auto 0;
  height: 7%;
  ${crimp}
  ${pinkedY('14px')}
  transform-origin: 0 100%;
  animation: ${tearAway} 760ms var(--ease-out) 380ms both;
  z-index: 2;
`;

const InkPanel = styled.div`
  display: flex;
  align-items: flex-end;
  flex: none;
  height: 42%;
  margin-inline: 6cqw;
  margin-top: 6cqw;
  padding: 6cqw 6cqw 5cqw;
  background-color: var(--spot);
  /* the flexo screen: tone comes from dots, not gradients */
  background-image: radial-gradient(rgb(255 255 255 / 0.16) 1.1px, transparent 1.4px);
  background-size: 6px 6px;
  color: #fff;
  overflow: hidden;

  ${(p) =>
    p.$variant === 'lead' &&
    css`
      height: 50%;
      margin-inline: 0;
      padding-inline: 7cqw 0;
    `}
  ${(p) => p.$variant === 'open' && css`height: 44%; margin-top: 3cqw;`}
  ${(p) =>
    p.$variant === 'mini' &&
    css`
      height: 56%;
      margin: 10cqw 10cqw 0;
      padding: 0;
      justify-content: center;
      align-items: center;
      background-size: 4px 4px;
    `}
`;

const Name = styled.h3`
  font-family: var(--font-display), sans-serif;
  font-size: 11cqw;
  line-height: 0.92;
  letter-spacing: -0.01em;
  color: #fff;
  hyphens: manual;
  text-wrap: balance;

  ${(p) =>
    p.$variant === 'lead' &&
    css`
      font-size: 22.5cqw;
      line-height: 0.8;
      white-space: nowrap;
      margin-right: -40cqw;
      text-wrap: nowrap;
    `}
  ${(p) => p.$variant === 'open' && css`font-size: 11.5cqw;`}
`;

const NameLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  /* the whole sachet opens the product page */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
  }
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }
`;

const MiniNumber = styled.span`
  font-family: var(--font-display), sans-serif;
  font-size: 30cqw;
  color: #fff;
`;

const SmallPrint = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 2cqw;
  margin: 4cqw 6cqw 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: clamp(11px, 5.4cqw, 17px);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ink);
`;

const Kicker = styled.p`
  margin: 1.5cqw 6cqw 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 500;
  font-size: clamp(12px, 5.6cqw, 18px);
  line-height: 1.15;
  color: var(--ink-soft);

  ${(p) => p.$variant === 'default' && css`display: none;`}

  @container (max-width: 240px) {
    display: none;
  }
`;

const Tear = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5cqw;
  margin: 3.5cqw 0 0;
  padding-left: 6cqw;
  font-family: var(--font-small), sans-serif;
  font-weight: 600;
  font-size: clamp(9px, 3.8cqw, 13px);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-soft);

  &::after {
    content: '';
    flex: 1;
    border-top: 1.5px dashed rgb(20 17 15 / 0.45);
  }
  svg { flex: none; }
`;

const Price = styled.p`
  display: flex;
  align-items: flex-start;
  margin: auto 6cqw 4cqw;
  padding-top: 3cqw;
  font-family: var(--font-display), sans-serif;
  font-size: 13cqw;
  line-height: 1;
  color: var(--spot);

  ${(p) => p.$variant === 'lead' && css`font-size: 11cqw;`}
`;

const Currency = styled.span`
  font-size: 0.5em;
  margin: 0.12em 0.06em 0 0;
`;

const StampSlot = styled.div`
  position: absolute;
  right: -4%;
  bottom: 11%;
  z-index: 3;

  ${(p) => p.$variant === 'lead' && css`right: -6%; bottom: 10%;`}
  ${(p) => p.$variant === 'open' && css`right: -8%; bottom: 12%;`}
`;
