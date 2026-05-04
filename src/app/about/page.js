'use client';
import styled from 'styled-components';
import { QUERIES } from '../lib/breakpoints';

export default function About() {
  return (
    <Wrapper>
      <Masthead>
        <Folio>
          <span>The Coffee Place — Issue {String(new Date().getFullYear()).slice(-2)}</span>
          <span>About / N°02</span>
        </Folio>
        <Title>
          A small shop<br />with a <Em>long memory.</Em>
        </Title>
        <Meta>BY THE PROPRIETORS · ESTABLISHED — RECENTLY · UPDATED MONDAYS</Meta>
      </Masthead>

      <Lede>
        <DropCap>W</DropCap>
        elcome to The Coffee Place. We are not a brand. We are a shop with six
        chairs, two grinders, and one strong feeling about how a flat white
        should taste.
      </Lede>

      <Body>
        <p>
          In our cozy room we curate a warm and inviting space for coffee
          enthusiasts and casual sippers alike. Our baristas craft each cup
          with precision and care, using ethically sourced beans from small
          farms we visit, in person, when we can.
        </p>
        <p>
          We also bring the experience to your doorstep. Our online store is a
          virtual haven for coffee lovers — a wide selection of beans, blends,
          and brewing equipment for every at-home barista. The bag you order on
          Tuesday was roasted on Sunday.
        </p>
      </Body>

      <Pull>
        <PullMark>※</PullMark>
        <PullText>
          “We do not have a wall of syrups. We do not have a loyalty app.
          We have six drinks and a long memory for the people who order them.”
        </PullText>
      </Pull>

      <Body>
        <p>
          Sustainability is a core value. We pay attention to where the bag,
          the lid, and the bean came from — and where they go after. Every sip
          supports eco-friendly packaging and fair-trade practices.
        </p>
        <p>
          Join us in person or in the menu. We are not just a coffee shop;
          we are a community of coffee aficionados sharing our passion,
          one cup at a time.
        </p>
      </Body>

      <Footer>
        <FooterMark>— END / N°02 —</FooterMark>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  max-width: 68ch;
  margin: 0 auto;
  width: 100%;
  padding: var(--space-12) var(--space-6) var(--space-16);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-10) var(--space-4) var(--space-12);
  }
`;

const Masthead = styled.header`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: var(--rule-w-2) solid var(--ink);
`;

const Folio = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--muted);
`;

const Title = styled.h1`
  font-family: var(--font-display), serif;
  font-size: clamp(2.25rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.035em;
`;

const Em = styled.em`
  font-style: italic;
  color: var(--muted);
  font-weight: 700;
`;

const Meta = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: var(--muted);
`;

const Lede = styled.p`
  font-family: var(--font-display), serif;
  font-size: clamp(1.25rem, 2vw, 1.625rem);
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 600;
  color: var(--ink);
`;

const DropCap = styled.span`
  float: left;
  font-family: var(--font-display), serif;
  font-size: 4.5em;
  font-weight: 800;
  line-height: 0.85;
  margin: 0.05em 0.08em -0.05em 0;
  background: var(--accent);
  color: var(--accent-ink);
  padding: 0 0.05em;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-family: var(--font-body), sans-serif;
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--ink-2);
`;

const Pull = styled.blockquote`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3);
  margin: var(--space-2) 0;
  padding: var(--space-5) var(--space-5);
  border-block: var(--rule-w-2) solid var(--ink);
`;

const PullMark = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 1rem;
`;

const PullText = styled.p`
  font-family: var(--font-display), serif;
  font-size: clamp(1.25rem, 2.4vw, 1.75rem);
  font-style: italic;
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-weight: 500;
  color: var(--ink);
`;

const Footer = styled.div`
  margin-top: var(--space-6);
  text-align: center;
`;

const FooterMark = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  color: var(--muted);
`;
