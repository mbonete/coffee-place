'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import products from '../products';
import QuantityStepper from './QuantityStepper';
import { QUERIES } from '../lib/breakpoints';

const FEATURED = [
  { id: 'espresso', kicker: 'Bold, short, unforgiving.' },
  { id: 'icedLatte', kicker: 'Cold milk, hot opinion.' },
  { id: 'macchiato', kicker: 'Sweet teeth tolerated.' },
];

export default function FeaturedStrip() {
  return (
    <Section aria-labelledby="featured-heading">
      <Header>
        <Eyebrow>Index — Selections / 03</Eyebrow>
        <H2 id="featured-heading">
          The short<br />list.
        </H2>
        <SeeAll href="/products">Full menu →</SeeAll>
      </Header>

      <List>
        {FEATURED.map(({ id, kicker }, i) => {
          const p = products[id];
          return (
            <Row key={id}>
              <Idx>N°{String(i + 1).padStart(2, '0')}</Idx>
              <Thumb>
                <ThumbImage src={p.src} alt="" fill sizes="80px" />
              </Thumb>
              <Body>
                <Name>{p.name}</Name>
                <Kicker>{kicker}</Kicker>
              </Body>
              <Price>
                <PriceCurrency>$</PriceCurrency>{p.price}
              </Price>
              <StepperSlot>
                <QuantityStepper productId={id} productName={p.name} />
              </StepperSlot>
            </Row>
          );
        })}
      </List>
    </Section>
  );
}

const Section = styled.section`
  max-width: 1320px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-6) var(--space-12);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-12) var(--space-4) var(--space-10);
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: end;
  gap: var(--space-4);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: var(--rule-w-2) solid var(--ink);
`;

const Eyebrow = styled.span`
  grid-column: 1 / -1;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
`;

const H2 = styled.h2`
  font-family: var(--font-display), serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.035em;
`;

const SeeAll = styled(Link)`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--ink);
  padding: var(--space-2) 0;
  &:hover { box-shadow: inset 0 -2px 0 0 var(--accent); }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: var(--rule-w) solid var(--ink);
`;

const Row = styled.li`
  display: grid;
  grid-template-columns: 56px 80px 1fr auto auto;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-4) var(--space-2);
  border-bottom: var(--rule-w) solid var(--ink);
  transition: background-color var(--motion) var(--easing);

  &:hover { background: var(--bone-2); }

  @media ${QUERIES.mobile} {
    grid-template-columns: 40px 64px 1fr auto;
    grid-template-areas:
      'idx thumb name name'
      'idx thumb price step';
    column-gap: var(--space-3);
    row-gap: 4px;
  }
`;

const Idx = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  color: var(--muted);
  font-variant-numeric: tabular-nums;

  @media ${QUERIES.mobile} { grid-area: idx; }
`;

const Thumb = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: var(--rule-w) solid var(--ink);
  background: var(--ink);
  overflow: hidden;

  @media ${QUERIES.mobile} {
    grid-area: thumb;
    width: 64px;
    height: 64px;
  }
`;

const ThumbImage = styled(Image)`
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 300ms var(--easing);
  ${Row}:hover & { filter: grayscale(0%); }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  gap: 4px;

  @media ${QUERIES.mobile} { grid-area: name; }
`;

const Name = styled.span`
  font-family: var(--font-display), serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
`;

const Kicker = styled.span`
  font-family: var(--font-body), sans-serif;
  font-size: 0.875rem;
  color: var(--muted);
`;

const Price = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;

  @media ${QUERIES.mobile} { grid-area: price; font-size: 1rem; }
`;

const PriceCurrency = styled.span`
  font-size: 0.75rem;
  color: var(--muted);
  margin-right: 1px;
`;

const StepperSlot = styled.div`
  @media ${QUERIES.mobile} { grid-area: step; justify-self: end; }
`;
