'use client';
import Image from 'next/image';
import styled from 'styled-components';
import QuantityStepper from './QuantityStepper';

export default function ProductCard({ product, index, priority = false }) {
  const { productId, name, description, price, src, alt } = product;

  const idx = typeof index === 'number' ? `N°${String(index + 1).padStart(2, '0')}` : null;

  return (
    <Card>
      <ImageWrap>
        <ProductImage
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        {idx && <IndexTag>{idx}</IndexTag>}
        <PriceTag>
          <PriceCurrency>$</PriceCurrency>{price}
        </PriceTag>
      </ImageWrap>
      <Body>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </Body>
      <Foot>
        <FootLabel>Qty</FootLabel>
        <QuantityStepper productId={productId} productName={name} />
      </Foot>
    </Card>
  );
}

const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--bone);
  border: var(--rule-w-2) solid var(--ink);
  transition: transform var(--motion) var(--easing);

  &:hover { transform: translateY(-2px); }
`;

const ImageWrap = styled.div`
  position: relative;
  aspect-ratio: 5 / 4;
  background: var(--ink);
  overflow: hidden;
  border-bottom: var(--rule-w-2) solid var(--ink);
`;

const ProductImage = styled(Image)`
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 400ms var(--easing), transform 500ms var(--easing);

  ${Card}:hover & {
    filter: grayscale(0%) contrast(1.05);
    transform: scale(1.03);
  }
`;

const IndexTag = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px 10px;
  background: var(--bone);
  color: var(--ink);
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  border-right: var(--rule-w) solid var(--ink);
  border-bottom: var(--rule-w) solid var(--ink);
`;

const PriceTag = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 6px 10px;
  background: var(--bone);
  color: var(--ink);
  font-family: var(--font-mono), monospace;
  font-size: 1rem;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  border-top: var(--rule-w) solid var(--ink);
  border-left: var(--rule-w) solid var(--ink);
`;

const PriceCurrency = styled.span`
  font-size: 0.75rem;
  color: var(--muted);
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-4);
`;

const Name = styled.h3`
  font-family: var(--font-display), serif;
  font-size: 1.375rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--ink);
`;

const Description = styled.p`
  font-family: var(--font-body), sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--muted);
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const Foot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) var(--space-4);
  border-top: var(--rule-w) solid var(--ink);
`;

const FootLabel = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
`;
