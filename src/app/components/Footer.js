'use client';
import styled from 'styled-components';
import Link from 'next/link';
import { QUERIES } from '../lib/breakpoints';

export default function Footer() {
  return (
    <Wrapper>
      <Top>
        <Manifesto>
          <Marker>※</Marker>
          <ManifestoText>
            Strong coffee. <em>Strong opinions.</em>
            <br />
            Roasted in small batches, brewed with care.
          </ManifestoText>
        </Manifesto>

        <Cols>
          <Col>
            <ColTitle>Shop</ColTitle>
            <FootLink href="/products"><Idx>01</Idx>Menu</FootLink>
            <FootLink href="/shopping-cart"><Idx>02</Idx>Cart</FootLink>
            <FootLink href="/about"><Idx>03</Idx>About</FootLink>
          </Col>
          <Col>
            <ColTitle>Read</ColTitle>
            <FootLink href="#"><Idx>04</Idx>Journal</FootLink>
            <FootLink href="#"><Idx>05</Idx>Roasters</FootLink>
            <FootLink href="#"><Idx>06</Idx>Wholesale</FootLink>
          </Col>
        </Cols>
      </Top>

      <BottomRule />

      <Bottom>
        <BottomLeft>© {new Date().getFullYear()} The Coffee Place</BottomLeft>
        <BottomRight>
          <span>EST. NOWHERE IN PARTICULAR</span>
          <Pulse aria-hidden="true">●</Pulse>
        </BottomRight>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  border-top: var(--rule-w-2) solid var(--ink);
  background: var(--bone);
  padding: var(--space-12) var(--space-6) var(--space-4);
  margin-top: var(--space-20);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-10) var(--space-4) var(--space-4);
  }
`;

const Top = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--space-12);

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
`;

const Manifesto = styled.div`
  display: flex;
  gap: var(--space-3);
  align-items: flex-start;
`;

const Marker = styled.span`
  font-size: 1.25rem;
  line-height: 1;
`;

const ManifestoText = styled.p`
  font-family: var(--font-display), serif;
  font-size: clamp(1.25rem, 2vw, 1.625rem);
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.01em;
  color: var(--ink);
  max-width: 28ch;

  em {
    font-style: italic;
    font-weight: 500;
    color: var(--muted);
  }
`;

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-8);
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
`;

const ColTitle = styled.h3`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: var(--space-2);
`;

const FootLink = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  gap: var(--space-2);
  text-decoration: none;
  color: var(--ink);
  font-family: var(--font-body), sans-serif;
  font-size: 0.9375rem;
  padding: 2px 0;

  &:hover {
    box-shadow: inset 0 -2px 0 0 var(--accent);
  }
`;

const Idx = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  color: var(--muted);
`;

const BottomRule = styled.div`
  max-width: 1320px;
  margin: var(--space-12) auto var(--space-3);
  border-top: var(--rule-w) solid var(--ink);
`;

const Bottom = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);

  @media ${QUERIES.mobile} {
    flex-direction: column;
    gap: var(--space-2);
  }
`;

const BottomLeft = styled.span``;

const BottomRight = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
`;

const Pulse = styled.span`
  color: var(--accent-ink);
  background: var(--accent);
  width: 8px;
  height: 8px;
  display: inline-block;
  animation: pulse 1600ms ease-in-out infinite;

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }
`;
