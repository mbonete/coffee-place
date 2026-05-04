'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { useCart } from '../hooks/useCart';
import { QUERIES } from '../lib/breakpoints';

export default function Header() {
  const { cartCount } = useCart();
  const cartLabel = `[CART/${String(cartCount).padStart(2, '0')}]`;

  return (
    <Wrapper>
      <Inner>
        <BrandLink href="/" aria-label="The Coffee Place — home">
          <Mark>※</Mark>
          <Wordmark>
            <span>The Coffee</span>
            <span>Place</span>
          </Wordmark>
        </BrandLink>

        <Nav aria-label="Primary">
          <NavLink href="/products">
            <Idx>01</Idx>
            <span>Menu</span>
          </NavLink>
          <NavLink href="/about">
            <Idx>02</Idx>
            <span>About</span>
          </NavLink>
          <CartLink
            href="/shopping-cart"
            aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            $active={cartCount > 0}
          >
            {cartLabel}
          </CartLink>
        </Nav>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--bone);
  border-bottom: var(--rule-w) solid var(--ink);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1320px;
  margin: 0 auto;
  padding: var(--space-3) var(--space-6);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-3) var(--space-4);
  }
`;

const BrandLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  color: var(--ink);
  padding: var(--space-2);
  margin-left: calc(-1 * var(--space-2));
`;

const Mark = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  color: var(--ink);
`;

const Wordmark = styled.span`
  display: inline-flex;
  flex-direction: column;
  font-family: var(--font-display), serif;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 0.95;
  letter-spacing: -0.01em;
  text-transform: uppercase;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: var(--space-6);

  @media ${QUERIES.mobile} {
    gap: var(--space-4);
  }
`;

const NavLink = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: 6px;
  text-decoration: none;
  color: var(--ink);
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: var(--space-2) 2px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 2px;
    right: 2px;
    bottom: 2px;
    height: 2px;
    background: var(--accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--motion) var(--easing);
  }
  &:hover::after { transform: scaleX(1); }
`;

const Idx = styled.span`
  font-size: 0.625rem;
  color: var(--muted);
  font-weight: 500;
`;

const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 var(--space-3);
  border: var(--rule-w-2) solid var(--ink);
  background: ${(p) => (p.$active ? 'var(--accent)' : 'var(--bone)')};
  color: var(--ink);
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  font-variant-numeric: tabular-nums;
  transition: background-color var(--motion) var(--easing), color var(--motion) var(--easing);

  &:hover {
    background: var(--ink);
    color: var(--bone);
  }
`;
