'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import products from '../products';
import { useCart } from '../hooks/useCart';
import Checkout from '../components/Checkout';
import QuantityStepper from '../components/QuantityStepper';
import Button from '../components/Button';
import { QUERIES } from '../lib/breakpoints';

export default function ShoppingCartPage() {
  const { cartLines, removeFromShoppingCart, cartCount } = useCart();
  const cartProductIds = Object.keys(cartLines);
  const isEmpty = cartProductIds.length === 0;

  return (
    <Wrapper>
      <Masthead>
        <Eyebrow>
          Order ticket — {String(cartCount).padStart(2, '0')} {cartCount === 1 ? 'item' : 'items'}
        </Eyebrow>
        <Title>Your cart.</Title>
      </Masthead>

      {isEmpty ? (
        <EmptyState>
          <EmptyMark>※ EMPTY</EmptyMark>
          <EmptyHeading>Nothing in the cup yet.</EmptyHeading>
          <EmptyCopy>
            Pick something from the menu — every great morning starts with one.
          </EmptyCopy>
          <Button as={Link} href="/products" $size="lg">
            [ Browse the menu → ]
          </Button>
        </EmptyState>
      ) : (
        <Grid>
          <List aria-label="Cart items">
            <ColHead>
              <span>Item</span>
              <span>Qty</span>
              <span style={{ textAlign: 'right' }}>Total</span>
            </ColHead>
            {cartProductIds.map((productId, i) => {
              const quantity = cartLines[productId];
              const product = products[productId];
              const lineTotal = (Number(product.price) * quantity).toFixed(2);

              return (
                <Line key={productId}>
                  <Idx>N°{String(i + 1).padStart(2, '0')}</Idx>
                  <ImageWrap>
                    <LineImage src={product.src} alt="" fill sizes="96px" />
                  </ImageWrap>
                  <Body>
                    <NameRow>
                      <Name>{product.name}</Name>
                      <RemoveBtn
                        type="button"
                        onClick={() => removeFromShoppingCart(productId)}
                        aria-label={`Remove ${product.name} from cart`}
                      >
                        [ × Remove ]
                      </RemoveBtn>
                    </NameRow>
                    <UnitPrice>${product.price} each</UnitPrice>
                    <ControlsRow>
                      <QuantityStepper productId={productId} productName={product.name} />
                      <LineTotal aria-label={`Line total $${lineTotal}`}>${lineTotal}</LineTotal>
                    </ControlsRow>
                  </Body>
                </Line>
              );
            })}
          </List>
          <Aside>
            <Checkout />
          </Aside>
        </Grid>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-12) var(--space-6) var(--space-16);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-10) var(--space-4) var(--space-12);
  }
`;

const Masthead = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-8);
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
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 0.9;
  letter-spacing: -0.035em;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: var(--space-8);
  align-items: start;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
    gap: var(--space-6);
  }
`;

const List = styled.section`
  display: flex;
  flex-direction: column;
  border-top: var(--rule-w) solid var(--ink);
`;

const ColHead = styled.div`
  display: grid;
  grid-template-columns: 56px 96px 1fr 80px;
  gap: var(--space-4);
  align-items: center;
  padding: var(--space-3) 0;
  border-bottom: var(--rule-w) solid var(--ink);
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);

  & > :nth-child(1) {
    grid-column: 3 / 4;
  }
  & > :nth-child(2) {
    grid-column: 4 / 5;
  }
  & > :nth-child(3) {
    grid-column: 4 / 5;
    text-align: right;
  }

  @media ${QUERIES.mobile} { display: none; }
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: 56px 96px 1fr;
  gap: var(--space-4);
  align-items: start;
  padding: var(--space-4) 0;
  border-bottom: var(--rule-w) solid var(--ink);

  @media ${QUERIES.mobile} {
    grid-template-columns: 40px 72px 1fr;
    gap: var(--space-3);
  }
`;

const Idx = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  color: var(--muted);
  padding-top: 4px;
`;

const ImageWrap = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  border: var(--rule-w) solid var(--ink);
  background: var(--ink);
  overflow: hidden;

  @media ${QUERIES.mobile} {
    width: 72px;
    height: 72px;
  }
`;

const LineImage = styled(Image)`
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  min-width: 0;
`;

const NameRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-3);
`;

const Name = styled.h2`
  font-family: var(--font-display), serif;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
`;

const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  padding: 2px 0;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--muted);
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    color: var(--ink);
    box-shadow: inset 0 -2px 0 0 var(--accent);
  }
`;

const UnitPrice = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  color: var(--muted);
`;

const ControlsRow = styled.div`
  margin-top: var(--space-2);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
`;

const LineTotal = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 1.125rem;
  font-weight: 500;
  color: var(--ink);
  font-variant-numeric: tabular-nums;
`;

const Aside = styled.aside`
  position: sticky;
  top: calc(64px + var(--space-4));

  @media ${QUERIES.tabletAndDown} {
    position: static;
  }
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  padding: var(--space-12) var(--space-6);
  border: var(--rule-w-2) solid var(--ink);
  background: var(--bone);
`;

const EmptyMark = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  background: var(--accent);
  color: var(--accent-ink);
  padding: 4px 8px;
`;

const EmptyHeading = styled.h2`
  font-family: var(--font-display), serif;
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const EmptyCopy = styled.p`
  color: var(--muted);
  margin-bottom: var(--space-3);
  max-width: 48ch;
`;
