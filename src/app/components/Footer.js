'use client';
import Link from 'next/link';
import styled from 'styled-components';
import { GitHub } from 'react-feather';

export default function Footer() {
  return (
    <Wrapper>
      <Inner>
        <Cols>
          <Col>
            <ColTitle>Shop</ColTitle>
            <FootLink href="/products">Menu</FootLink>
            <FootLink href="/shopping-cart">Cart</FootLink>
            <FootLink href="/about">The small print</FootLink>
          </Col>
          <Col>
            <ColTitle>About this site</ColTitle>
            <Note>
              The Coffee Place is a fictional shop. Nothing here ships, and no card is ever charged.
            </Note>
            <Note>
              Designed and built by{' '}
              <ExtLink href="https://github.com/mbonete" target="_blank" rel="noreferrer">
                Maria Bonete
              </ExtLink>
              .
            </Note>
            <SourceLink href="https://github.com/mbonete/coffee-place" target="_blank" rel="noreferrer">
              <GitHub size={16} strokeWidth={2.25} aria-hidden="true" />
              Source on GitHub
            </SourceLink>
          </Col>
        </Cols>
      </Inner>
      <Signature aria-hidden="true">The Coffee Place</Signature>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  position: relative;
  margin-top: var(--space-24);
  background: var(--ink);
  color: var(--paper);
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: var(--page-max);
  margin: 0 auto;
  padding: var(--space-16) var(--gutter) var(--space-8);
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: var(--space-10) var(--space-16);
  max-width: 820px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
`;

const ColTitle = styled.h2`
  margin-bottom: var(--space-2);
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--table);
`;

const FootLink = styled(Link)`
  font-size: 1.0625rem;
  color: var(--paper);
  text-decoration: none;
  padding: 2px 0;
  &:hover { text-decoration: underline; }
  &:focus-visible { outline-color: var(--paper); }
`;

const Note = styled.p`
  max-width: 38ch;
  font-size: 1rem;
  color: rgb(251 250 245 / 0.78);
`;

const ExtLink = styled.a`
  color: var(--paper);
  &:focus-visible { outline-color: var(--paper); }
`;

const SourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-2);
  color: var(--paper);
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  &:hover { text-decoration: underline; }
  &:focus-visible { outline-color: var(--paper); }
`;

/* The house name at the scale of the room, cut off by the edge of the table. */
const Signature = styled.p`
  font-family: var(--font-display), sans-serif;
  font-size: clamp(4rem, 15.5vw, 15rem);
  line-height: 0.78;
  letter-spacing: -0.02em;
  white-space: nowrap;
  color: var(--table);
  margin: var(--space-4) 0 -0.16em calc(var(--gutter) - 0.04em);
  user-select: none;
`;
