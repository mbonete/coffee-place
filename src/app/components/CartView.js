'use client';
import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { X } from 'react-feather';
import products from '../products';
import { useCart, formatPrice } from '../hooks/useCart';
import { QUERIES } from '../lib/breakpoints';
import Sachet from './Sachet';
import QuantityStepper from './QuantityStepper';
import Receipt from './Receipt';
import Button from './Button';

export default function CartView() {
  const { cartLines, cartCount, remove, hydrated } = useCart();
  const ids = Object.keys(cartLines);
  const isEmpty = hydrated && ids.length === 0;
  const [paidOrder, setPaidOrder] = useState(null);

  return (
    <Wrapper>
      <Masthead>
        <Title>Your cart.</Title>
        {hydrated && (
          <Count>
            {cartCount} {cartCount === 1 ? 'sachet' : 'sachets'}
          </Count>
        )}
      </Masthead>

      <Layout>
        <Lines aria-label="Items in your cart">
          {isEmpty && (
            <Empty>
              {paidOrder ? (
                <OrderMinis aria-hidden="true">
                  {paidOrder.lines.map(({ id }, i) => (
                    <Sachet
                      key={id}
                      product={products[id]}
                      variant="mini"
                      stamp={false}
                      linked={false}
                      transition={false}
                      rotate={[-6, 4, -2, 7, -5, 3][i % 6]}
                    />
                  ))}
                </OrderMinis>
              ) : (
                <EmptySachet aria-hidden="true" />
              )}
              <EmptyText>
                {paidOrder ? (
                  <>
                    <EmptyHeading>Order N° {paidOrder.orderNo} placed.</EmptyHeading>
                    <p>Your receipt is printed. Tear it off to start a new order, or keep browsing.</p>
                  </>
                ) : (
                  <>
                    <EmptyHeading>Nothing in the cart yet.</EmptyHeading>
                    <p>Every order starts with one sachet. Pick one from the series.</p>
                  </>
                )}
                <Button as={Link} href="/products" $variant="ink">
                  See the series
                </Button>
              </EmptyText>
            </Empty>
          )}

          {ids.map((id) => {
            const product = products[id];
            const quantity = cartLines[id];
            return (
              <Line key={id}>
                <Sachet product={product} variant="mini" stamp={false} linked={false} transition={false} rotate={-4} />
                <LineMain>
                  <LineName href={`/products/${id}`}>{product.name}</LineName>
                  <LineMeta>
                    N° {product.number} · ${formatPrice(product.price)} each
                  </LineMeta>
                </LineMain>
                <LineControls>
                  <QuantityStepper productId={id} productName={product.name} />
                  <LineTotal>${formatPrice(Number(product.price) * quantity)}</LineTotal>
                  <RemoveButton type="button" onClick={() => remove(id)} aria-label={`Remove ${product.name} from cart`}>
                    <X size={18} strokeWidth={2.5} aria-hidden="true" />
                  </RemoveButton>
                </LineControls>
              </Line>
            );
          })}
        </Lines>

        <Aside $first={Boolean(paidOrder)}>
          <Receipt paid={paidOrder} onPaid={setPaidOrder} onTornOff={() => setPaidOrder(null)} />
        </Aside>
      </Layout>
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
  align-items: baseline;
  flex-wrap: wrap;
  gap: var(--space-2) var(--space-6);
  margin-bottom: var(--space-10);
`;

const Title = styled.h1`
  font-size: clamp(3rem, 7vw, 6rem);
`;

const Count = styled.p`
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--table-ink);
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(300px, 1fr);
  gap: clamp(32px, 5vw, 80px);
  align-items: start;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
  }
`;

const Lines = styled.section`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5) 0;
  border-bottom: 2px dashed var(--table-rule);

  &:first-child { border-top: 2px dashed var(--table-rule); }

  @media ${QUERIES.mobile} {
    grid-template-columns: auto minmax(0, 1fr);
    row-gap: var(--space-3);
  }
`;

const LineMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  min-width: 0;
`;

const LineName = styled(Link)`
  font-family: var(--font-display), sans-serif;
  font-size: clamp(1.25rem, 2.2vw, 1.75rem);
  line-height: 1;
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

const LineMeta = styled.p`
  font-family: var(--font-small), sans-serif;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--table-ink);
`;

const LineControls = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-4);

  @media ${QUERIES.mobile} {
    grid-column: 1 / -1;
    justify-content: space-between;
  }
`;

const LineTotal = styled.p`
  min-width: 4.5ch;
  text-align: right;
  font-family: var(--font-display), sans-serif;
  font-size: 1.25rem;
`;

const RemoveButton = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 2px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  color: var(--ink);

  &:hover {
    border-color: var(--ink);
  }
`;

const Empty = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
  padding: var(--space-8) 0;

  @media ${QUERIES.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const EmptySachet = styled.div`
  flex: none;
  width: 120px;
  aspect-ratio: 5 / 7;
  border: 3px dashed var(--table-ink);
  transform: rotate(-5deg);
`;

const EmptyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
  max-width: 40ch;
`;

const EmptyHeading = styled.h2`
  font-size: 2rem;
`;

const Aside = styled.aside`
  position: sticky;
  top: 100px;

  @media ${QUERIES.tabletAndDown} {
    position: static;
    /* once paid, the receipt is the news: lead with it on smaller screens */
    order: ${(p) => (p.$first ? -1 : 0)};
  }
`;

const OrderMinis = styled.div`
  flex: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  max-width: 220px;
`;
