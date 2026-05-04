'use client';
import styled from 'styled-components';
import products from '../products';
import ProductCard from '../components/ProductCard';
import { QUERIES } from '../lib/breakpoints';

export default function Products() {
  const all = Object.values(products);

  return (
    <Wrapper>
      <Masthead>
        <Eyebrow>The menu — {String(all.length).padStart(2, '0')} ITEMS · UPDATED WEEKLY</Eyebrow>
        <Title>
          Six staples.<br />
          <Em>Nothing else.</Em>
        </Title>
        <Lede>
          We do not chase the seasonal lavender mocha. We do not bend coffee
          into a dessert. We do these six, and we do them on purpose.
        </Lede>
        <ColumnHead>
          <span>Item</span>
          <span style={{ textAlign: 'right' }}>Price</span>
        </ColumnHead>
      </Masthead>

      <Grid>
        {all.map((product, i) => (
          <ProductCard
            key={product.productId}
            product={product}
            index={i}
            priority={i < 3}
          />
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: var(--space-12) var(--space-6) var(--space-16);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-10) var(--space-4) var(--space-12);
  }
`;

const Masthead = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-bottom: var(--space-10);
  padding-bottom: var(--space-4);
  border-bottom: var(--rule-w-2) solid var(--ink);
`;

const Eyebrow = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
`;

const Title = styled.h1`
  font-family: var(--font-display), serif;
  font-size: clamp(2.75rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.04em;
`;

const Em = styled.em`
  font-style: italic;
  color: var(--muted);
  font-weight: 600;
`;

const Lede = styled.p`
  max-width: 56ch;
  font-size: 1.0625rem;
  line-height: 1.55;
  color: var(--ink-2);
`;

const ColumnHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--space-4);
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${QUERIES.mobile} {
    grid-template-columns: 1fr;
    gap: var(--space-4);
  }
`;
