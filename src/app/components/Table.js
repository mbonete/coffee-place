'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';
import { series } from '../products';
import { QUERIES } from '../lib/breakpoints';
import Sachet from './Sachet';

// Where each sachet lands on the table, and at what angle.
const LAYOUT = {
  espresso: { area: 'lead', rotate: -3 },
  americano: { area: 'a', rotate: 6 },
  cappuccino: { area: 'b', rotate: -7 },
  'iced-latte': { area: 'c', rotate: -3 },
  'caramel-macchiato': { area: 'd', rotate: 8 },
  'filter-coffee': { area: 'e', rotate: 10 },
};

export default function Table() {
  return (
    <Wrapper aria-labelledby="table-heading">
      <Inner>
        <Copy>
          <Headline id="table-heading">
            Six staples. Collect the series.
          </Headline>
          <Lede>
            Every drink on our menu is printed on its own sachet, in its own ink. Stamp one into your
            cart, or open it up to see what is inside.
          </Lede>
          <MenuLink href="/products">
            The whole series
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </MenuLink>
        </Copy>

        {series.map((product, i) => {
            const { area, rotate } = LAYOUT[product.productId];
            return (
              <Slot key={product.productId} style={{ gridArea: area }} $area={area}>
                <Sachet
                  product={product}
                  variant={area === 'lead' ? 'lead' : 'default'}
                  rotate={rotate}
                  index={i}
                  land
                  headingLevel="h2"
                  priority={i < 2}
                />
              </Slot>
            );
          })}
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow-x: clip;
`;

/*
 * One grid holds the copy and the six sachets, so the bag can lie beside the copy on desktop.
 * Desktop: the lead sachet spans two rows, four sit beside it.
 * Tablet and phone: an even scatter under the copy.
 */
const Inner = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 4.6fr) minmax(0, 3.3fr) minmax(0, 2fr) minmax(0, 2fr);
  grid-template-areas:
    'copy lead a b'
    'e    lead c d';
  gap: clamp(16px, 2.2vw, 32px) clamp(16px, 2vw, 32px);
  align-items: start;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: clamp(20px, 3.5vh, 44px) var(--gutter) var(--space-6);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-areas:
      'copy copy copy'
      'lead a    b'
      'c    d    e';
    row-gap: var(--space-8);
  }

  @media ${QUERIES.mobile} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas:
      'copy copy'
      'lead a'
      'b    c'
      'd    e';
    gap: var(--space-8) var(--space-5);
  }
`;

const Copy = styled.div`
  grid-area: copy;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-5);
  padding-top: clamp(8px, 3vh, 40px);
  padding-right: clamp(0px, 2vw, 32px);
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 3.9vw, 3.875rem);
  line-height: 0.92;
  letter-spacing: -0.02em;
`;

const Lede = styled.p`
  max-width: 34ch;
  font-size: clamp(1.125rem, 1.4vw, 1.25rem);
  line-height: 1.45;
  font-weight: 500;
  color: var(--ink);
`;

const MenuLink = styled(Link)`
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

  svg { transition: transform var(--motion) var(--ease-out); }
  &:hover svg { transform: translateX(4px); }
`;

const Slot = styled.div`
  min-width: 0;

  /* break the grid a little, like things dropped on a table */
  ${(p) => p.$area === 'lead' && 'align-self: center;'}
  ${(p) => p.$area === 'b' && 'margin-top: 16%;'}
  ${(p) => p.$area === 'c' && 'margin-top: -4%;'}
  ${(p) => p.$area === 'd' && 'margin-top: 22%;'}
  ${(p) => p.$area === 'e' && 'width: min(250px, 56%); margin: 16% 0 0 16%;'}

  @media ${QUERIES.tabletAndDown} {
    width: auto;
    margin: 0;
    ${(p) => (p.$area === 'a' || p.$area === 'd' ? 'margin-top: 8%;' : '')}
  }
  @media ${QUERIES.mobile} {
    margin: 0;
    ${(p) => (p.$area === 'a' || p.$area === 'c' || p.$area === 'e' ? 'margin-top: 14%;' : '')}
  }
`;
