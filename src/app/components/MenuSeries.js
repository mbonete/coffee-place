'use client';
import styled from 'styled-components';
import { series } from '../products';
import { QUERIES } from '../lib/breakpoints';
import Sachet from './Sachet';

const TILT = [-2.5, 2, -1.5, 3, -2, 1.5];

export default function MenuSeries() {
  return (
    <Wrapper>
      <Masthead>
        <Title>The series.</Title>
        <Lede>
          Six staples, numbered. No seasonal specials, no syrup wall. Open a sachet to see what is
          inside, or stamp it straight into your cart.
        </Lede>
      </Masthead>

      <Grid>
        {series.map((product, i) => (
          <Item key={product.productId}>
            <SachetSlot>
              <Sachet product={product} rotate={TILT[i]} index={i} land priority={i < 3} headingLevel="h2" />
            </SachetSlot>
            <Notes>
              <Kicker>{product.kicker}</Kicker>
              <Description>{product.description}</Description>
            </Notes>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: var(--space-12) var(--gutter) 0;
`;

const Masthead = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-4) var(--space-12);
  margin-bottom: var(--space-12);
`;

const Title = styled.h1`
  font-size: clamp(3rem, 7vw, 6rem);
`;

const Lede = styled.p`
  max-width: 44ch;
  font-size: 1.1875rem;
  font-weight: 500;
`;

const Grid = styled.ol`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-16) clamp(24px, 4vw, 64px);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media ${QUERIES.mobile} {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  @media ${QUERIES.mobile} {
    display: grid;
    grid-template-columns: minmax(0, 11fr) minmax(0, 10fr);
    align-items: center;
    gap: var(--space-5);
  }
`;

const SachetSlot = styled.div`
  width: min(100%, 300px);
  margin-inline: auto;

  @media ${QUERIES.mobile} {
    width: 100%;
  }
`;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  max-width: 36ch;
  margin-inline: auto;
  text-align: center;

  @media ${QUERIES.mobile} {
    text-align: left;
    margin: 0;
  }
`;

const Kicker = styled.p`
  font-family: var(--font-display), sans-serif;
  font-size: 1.25rem;
  line-height: 1.05;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--ink-soft);
`;
