'use client';
import Image from 'next/image';
import styled from 'styled-components';
import { QUERIES } from '../lib/breakpoints';

export default function Article() {
  return (
    <Wrapper>
      <Inner>
        <Sidebar>
          <Eyebrow>Field notes / N°02</Eyebrow>
          <SmallTitle>The premise.</SmallTitle>
          <Meta>1,247 WORDS · ~4 MIN READ</Meta>
        </Sidebar>

        <Column>
          <Lede>
            <DropCap>C</DropCap>offee is not a personality. It is a
            <Em> small, daily decision</Em> made well or made poorly. We chose
            to make it well — every day, six ways, no exceptions.
          </Lede>
          <Body>
            <p>
              From the selection of beans to the calibration of grind and
              extraction, every step is a choice we re-litigate weekly. The bag
              you take home was roasted within eight days of meeting it. The
              espresso in your cup was ground twelve seconds ago.
            </p>
            <p>
              We do not have a wall of syrups. We do not have a loyalty app. We
              have six drinks and a long memory for the people who order them.
            </p>
          </Body>
        </Column>

        <FigureWrap>
          <Fig>
            <FigImage
              src="/coffee1.jpg"
              alt="Espresso shot pulling into a small cup"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </Fig>
          <FigCaption>FIG.2 — A 22-SECOND EXTRACTION, ROUGHLY.</FigCaption>
        </FigureWrap>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--bone-2);
  border-block: var(--rule-w) solid var(--ink);
`;

const Inner = styled.article`
  max-width: 1320px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-6);
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  gap: var(--space-12);
  align-items: start;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    padding: var(--space-12) var(--space-4);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  border-right: var(--rule-w) solid var(--ink);
  padding-right: var(--space-6);

  @media ${QUERIES.tabletAndDown} {
    border-right: none;
    border-bottom: var(--rule-w) solid var(--ink);
    padding-right: 0;
    padding-bottom: var(--space-4);
  }
`;

const Eyebrow = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
`;

const SmallTitle = styled.h2`
  font-family: var(--font-display), serif;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Meta = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: var(--muted);
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 56ch;
`;

const Lede = styled.p`
  font-family: var(--font-display), serif;
  font-size: clamp(1.375rem, 2vw, 1.75rem);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.01em;
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

const Em = styled.em`
  font-style: italic;
  color: var(--muted);
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  font-family: var(--font-body), sans-serif;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--ink-2);
`;

const FigureWrap = styled.figure`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin: 0;
`;

const Fig = styled.div`
  position: relative;
  aspect-ratio: 4 / 5;
  border: var(--rule-w-2) solid var(--ink);
  overflow: hidden;
`;

const FigImage = styled(Image)`
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
`;

const FigCaption = styled.figcaption`
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  color: var(--muted);
`;
