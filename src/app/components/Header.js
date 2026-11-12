'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled, { css, keyframes } from 'styled-components';
import { useCart } from '../hooks/useCart';
import BowlIcon from './BowlIcon';

export default function Header() {
  const { cartCount } = useCart();
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Wrapper>
      <Inner>
        <Brand href="/" aria-label="The Coffee Place, home">
          The Coffee Place
        </Brand>

        <Nav aria-label="Primary">
          <NavLink href="/products" aria-current={isActive('/products') ? 'page' : undefined}>
            Menu
          </NavLink>
          <NavLink href="/about" aria-current={isActive('/about') ? 'page' : undefined}>
            About
          </NavLink>
          <CartLink
            href="/shopping-cart"
            aria-label={`Cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
            aria-current={isActive('/shopping-cart') ? 'page' : undefined}
          >
            <BowlIcon size={20} />
            <CartWord>Cart</CartWord>
            <CountWindow aria-hidden="true">
              {/* keyed by count so each change flips the number in */}
              <Count key={cartCount} $animate={cartCount > 0}>
                {String(cartCount).padStart(2, '0')}
              </Count>
            </CountWindow>
          </CartLink>
        </Nav>
      </Inner>
    </Wrapper>
  );
}

const flipIn = keyframes`
  from { transform: translateY(-110%); }
  to   { transform: translateY(0); }
`;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: var(--table);
  border-bottom: 2px solid var(--table-rule);
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  max-width: var(--page-max);
  margin: 0 auto;
  padding: var(--space-3) var(--gutter);
`;

const Brand = styled(Link)`
  font-family: var(--font-display), sans-serif;
  font-size: clamp(0.9375rem, 2.2vw, 1.5rem);
  line-height: 1;
  color: var(--ink);
  text-decoration: none;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: clamp(10px, 3vw, 32px);
`;

const NavLink = styled(Link)`
  position: relative;
  padding: var(--space-2) 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);

  @media (max-width: 420px) {
    font-size: 0.9375rem;
    letter-spacing: 0.04em;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2px;
    border-top: 2px dashed var(--ink);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--motion) var(--ease-out);
  }
  &:hover::after,
  &[aria-current='page']::after {
    transform: scaleX(1);
  }
`;

const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  min-height: 44px;
  padding: 0 var(--space-2) 0 var(--space-3);
  background: var(--house);
  color: #fff;
  border-radius: 3px;
  text-decoration: none;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background-color var(--motion-fast) ease;

  &:hover { background: var(--house-deep); }
  svg { flex: none; }

  @media (max-width: 420px) {
    padding-left: var(--space-2);
  }
`;

const CartWord = styled.span`
  @media (max-width: 420px) {
    display: none;
  }
`;

const CountWindow = styled.span`
  display: inline-grid;
  overflow: hidden;
  min-width: 2.2em;
  height: 30px;
  place-items: center;
  background: var(--paper);
  color: var(--ink);
  border-radius: 2px;
  font-family: var(--font-display), sans-serif;
  font-size: 0.9375rem;
  letter-spacing: 0.02em;
`;

const Count = styled.span`
  display: block;
  ${(p) =>
    p.$animate &&
    css`
      animation: ${flipIn} 260ms var(--ease-out);
    `}
`;
