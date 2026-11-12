'use client';
import Link from 'next/link';
import styled from 'styled-components';
import Button from './Button';

export default function NotFoundSheet() {
  return (
    <Wrapper>
      <Outline aria-hidden="true">7</Outline>
      <Text>
        <Title>Not in the series.</Title>
        <p>There are six sachets and this page is not one of them.</p>
        <Button as={Link} href="/products" $variant="ink">
          See the six
        </Button>
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: var(--page-max);
  margin: 0 auto;
  padding: var(--space-20) var(--gutter) 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-12);
`;

const Outline = styled.span`
  display: grid;
  place-items: center;
  width: 160px;
  aspect-ratio: 5 / 7;
  border: 3px dashed var(--table-ink);
  transform: rotate(-6deg);
  font-family: var(--font-display), sans-serif;
  font-size: 4rem;
  color: var(--table-ink);
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-4);
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
`;
