'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'react-feather';
import products, { series, SERIES_SIZE } from '../products';
import { formatPrice, useCart } from '../hooks/useCart';
import { QUERIES } from '../lib/breakpoints';
import Sachet from './Sachet';
import QuantityStepper from './QuantityStepper';
import AddStamp from './AddStamp';
import Duotone from './Duotone';

// Each layer of the drink gets a lighter halftone of the same ink, the way a one-colour print makes tones.
const SCREENS = [
  null, // solid
  { dot: 2.1, step: 5 },
  { dot: 1.5, step: 5 },
  { dot: 1.1, step: 6 },
];

export default function ProductDetail({ productId }) {
  const product = products[productId];
  const { cartLines } = useCart();
  const quantity = cartLines[productId] ?? 0;
  const { name, kicker, description, price, volume, ink, number, notes, inside, perCup, brew, src, alt } = product;
  const total = inside.reduce((acc, part) => acc + part.amount, 0);
  const prev = series[(number - 2 + SERIES_SIZE) % SERIES_SIZE];
  const next = series[number % SERIES_SIZE];

  return (
    <Wrapper style={{ '--spot': ink }}>
      <Back href="/products">
        <ArrowLeft size={18} strokeWidth={2.5} aria-hidden="true" />
        The series
      </Back>

      <Layout>
        <SachetCol>
          <SachetSticky>
            <Sachet product={product} variant="open" linked={false} stamp={false} headingLevel="p" priority />
          </SachetSticky>
        </SachetCol>

        <Info>
          <Title>{name}</Title>
          <Kicker>{kicker}</Kicker>
          <Description>{description}</Description>

          <BuyRow>
            <Price>
              <Currency>$</Currency>
              {formatPrice(price)}
            </Price>
            {quantity > 0 ? (
              <QuantityStepper productId={productId} productName={name} />
            ) : (
              <AddStamp productId={productId} productName={name} large />
            )}
            <CartLink href="/shopping-cart">View cart</CartLink>
          </BuyRow>

          <Block aria-labelledby="inside-heading">
            <BlockTitle id="inside-heading">What is inside</BlockTitle>
            <Composition>
              <Bar aria-hidden="true">
                {inside.map((part, i) => {
                  const screen = SCREENS[Math.min(i, SCREENS.length - 1)];
                  return (
                    <Layer
                      key={part.label}
                      style={{
                        flexGrow: part.amount,
                        backgroundImage: screen
                          ? `radial-gradient(var(--spot) ${screen.dot}px, transparent ${screen.dot + 0.4}px)`
                          : 'none',
                        backgroundColor: screen ? 'var(--paper)' : 'var(--spot)',
                        backgroundSize: screen ? `${screen.step}px ${screen.step}px` : undefined,
                      }}
                    />
                  );
                })}
              </Bar>
              <Parts>
                {inside.map((part) => (
                  <Part key={part.label}>
                    <PartAmount>
                      {part.amount}
                      <small> {part.unit ?? 'ml'}</small>
                    </PartAmount>
                    <PartLabel>{part.label}</PartLabel>
                  </Part>
                ))}
              </Parts>
              <Total>
                {perCup
                  ? `Per cup. The bag holds ${volume}.`
                  : `${total} ml in the cup.`}
              </Total>
            </Composition>
          </Block>

          <TwoUp>
            <Block aria-labelledby="notes-heading">
              <BlockTitle id="notes-heading">Tasting notes</BlockTitle>
              <NotesText>{notes}</NotesText>
            </Block>
            <Block aria-labelledby="spec-heading">
              <BlockTitle id="spec-heading">House spec</BlockTitle>
              <Spec>
                {brew.map(([k, v]) => (
                  <SpecRow key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </SpecRow>
                ))}
              </Spec>
            </Block>
          </TwoUp>

          <Duotone src={src} alt={alt} ink={ink} sizes="(max-width: 1024px) 92vw, 46vw" aspect="3 / 2" />
        </Info>
      </Layout>

      <SeriesNav aria-label="More from the series">
        <SeriesLink href={`/products/${prev.productId}`} rel="prev">
          <ArrowLeft size={20} strokeWidth={2.5} aria-hidden="true" />
          <SeriesName>
            <SeriesNo>N° {prev.number}</SeriesNo> {prev.name}
          </SeriesName>
        </SeriesLink>
        <SeriesLink href={`/products/${next.productId}`} rel="next" $alignEnd>
          <SeriesName>
            <SeriesNo>N° {next.number}</SeriesNo> {next.name}
          </SeriesName>
          <ArrowRight size={20} strokeWidth={2.5} aria-hidden="true" />
        </SeriesLink>
      </SeriesNav>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: var(--space-8) var(--gutter) 0;
`;

const Back = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) 0;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(32px, 6vw, 96px);
  margin-top: var(--space-6);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
  }
`;

const SachetCol = styled.div`
  @media ${QUERIES.tabletAndDown} {
    max-width: 360px;
    width: 72%;
    margin-inline: auto;
  }
`;

const SachetSticky = styled.div`
  position: sticky;
  top: 112px;
  padding-top: var(--space-16);
  max-width: 420px;
  margin-inline: auto;

  @media ${QUERIES.tabletAndDown} {
    position: static;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  min-width: 0;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 7vw, 6rem);
  line-height: 0.88;
`;

const Kicker = styled.p`
  margin-top: calc(-1 * var(--space-4));
  font-family: var(--font-display), sans-serif;
  font-size: clamp(1.25rem, 2vw, 1.625rem);
  line-height: 1.1;
`;

const Description = styled.p`
  max-width: 52ch;
  font-size: 1.1875rem;
`;

const BuyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-4) var(--space-6);
  padding: var(--space-5) 0;
  border-block: 2px dashed var(--table-ink);
`;

const Price = styled.p`
  display: flex;
  align-items: flex-start;
  font-family: var(--font-display), sans-serif;
  font-size: 2.75rem;
  line-height: 1;
`;

const Currency = styled.span`
  font-size: 0.5em;
  margin: 0.1em 0.06em 0 0;
`;

const CartLink = styled(Link)`
  margin-left: auto;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  border-bottom: 2.5px dashed var(--ink);
  padding: var(--space-1) 0;
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
`;

const BlockTitle = styled.h2`
  font-size: 1.5rem;
`;

const Composition = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-5);
  background: var(--paper);
  filter: var(--shadow-sachet);
`;

const Bar = styled.div`
  display: flex;
  height: 56px;
  gap: 3px;
`;

const Layer = styled.div`
  flex-basis: 0;
  min-width: 18px;
  border: 2px solid var(--spot);
  transform-origin: left;
  animation: pour 900ms var(--ease-out) 300ms backwards;

  &:nth-child(2) { animation-delay: 420ms; }
  &:nth-child(3) { animation-delay: 540ms; }
  &:nth-child(4) { animation-delay: 660ms; }

  @keyframes pour {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
`;

const Parts = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3) var(--space-8);
`;

const Part = styled.li`
  display: flex;
  flex-direction: column;
`;

const PartAmount = styled.span`
  font-family: var(--font-display), sans-serif;
  font-size: 1.5rem;
  line-height: 1.1;
  color: var(--spot);

  small {
    font-family: var(--font-small), sans-serif;
    font-weight: 700;
    font-size: 0.9375rem;
    color: var(--ink);
  }
`;

const PartLabel = styled.span`
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const Total = styled.p`
  font-size: 0.9375rem;
  color: var(--ink-soft);
`;

const TwoUp = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--space-8);

  @media ${QUERIES.mobile} {
    grid-template-columns: 1fr;
  }
`;

const NotesText = styled.p`
  font-size: 1.125rem;
`;

const Spec = styled.dl`
  display: flex;
  flex-direction: column;
`;

const SpecRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-2) 0;
  border-bottom: 2px dashed var(--table-rule);

  dt {
    font-family: var(--font-small), sans-serif;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  dd {
    margin: 0;
    font-weight: 600;
  }
`;

const SeriesNav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-4);
  margin-top: var(--space-20);
  padding-top: var(--space-6);
  border-top: 2px solid var(--table-rule);

  @media ${QUERIES.mobile} {
    grid-template-columns: 1fr;
  }
`;

const SeriesLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  justify-self: ${(p) => (p.$alignEnd ? 'end' : 'start')};
  text-align: ${(p) => (p.$alignEnd ? 'right' : 'left')};
  text-decoration: none;
  padding: var(--space-2) 0;

  &:hover svg { transform: translateX(${(p) => (p.$alignEnd ? '4px' : '-4px')}); }
  svg { flex: none; transition: transform var(--motion) var(--ease-out); }
`;

const SeriesNo = styled.span`
  white-space: nowrap;
  margin-right: 0.15em;
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--table-ink);
`;

const SeriesName = styled.span`
  font-family: var(--font-display), sans-serif;
  font-size: clamp(1.0625rem, 2.4vw, 1.875rem);
  line-height: 1;
`;
