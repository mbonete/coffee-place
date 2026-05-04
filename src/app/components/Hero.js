'use client';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Button from './Button';
import { QUERIES } from '../lib/breakpoints';

export default function Hero() {
  return (
    <Wrapper>
      <Inner>
        <Meta>
          <MetaRow>
            <span>※ ESPRESSO / N°01</span>
            <Hairline aria-hidden="true" />
          </MetaRow>
          <MetaRow>
            <span>VOL. {new Date().getFullYear()} — ISSUE 01</span>
          </MetaRow>
        </Meta>

        <Headline>
          <Line>Strong</Line>
          <Line>coffee,</Line>
          <Line>strong</Line>
          <Line><Highlight>opinions.</Highlight></Line>
        </Headline>

        <Aside>
          <Lede>
            Six staples — no syrup walls, no novelty mugs, no apologies.
            Roasted weekly, brewed when you order, served without a story.
          </Lede>
          <Actions>
            <Button as={Link} href="/products" $size="lg">
              [ Menu → ]
            </Button>
            <Button as={Link} href="/about" $variant="ghost" $size="lg">
              The premise
            </Button>
          </Actions>
        </Aside>

        <ImageWrap>
          <HeroImage
            src="/coffee-machine.jpg"
            alt="Espresso brewing through a portafilter"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />
          <Caption>FIG.1 — A WORKHORSE, NOT A SHRINE</Caption>
        </ImageWrap>
      </Inner>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-bottom: var(--rule-w) solid var(--ink);
`;

const Inner = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: var(--space-10) var(--space-6) var(--space-16);
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-template-areas:
    'meta    meta'
    'head    image'
    'aside   image';
  column-gap: var(--space-12);
  row-gap: var(--space-8);

  @media ${QUERIES.tabletAndDown} {
    padding: var(--space-8) var(--space-4) var(--space-12);
    grid-template-columns: 1fr;
    grid-template-areas:
      'meta'
      'head'
      'image'
      'aside';
    column-gap: 0;
    row-gap: var(--space-6);
  }
`;

const Meta = styled.div`
  grid-area: meta;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
`;

const MetaRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-3);
`;

const Hairline = styled.span`
  flex: 1;
  height: 0;
  border-top: var(--rule-w) solid var(--ink);
`;

const Headline = styled.h1`
  grid-area: head;
  font-family: var(--font-display), serif;
  font-weight: 800;
  font-size: clamp(3.5rem, 11vw, 9rem);
  line-height: 0.9;
  letter-spacing: -0.045em;
  color: var(--ink);
  margin: 0;
`;

const Line = styled.span`
  display: block;
`;

const Highlight = styled.span`
  position: relative;
  display: inline-block;
  padding: 0 0.05em;
  background: var(--accent);
  color: var(--accent-ink);
  font-style: italic;
`;

const Aside = styled.div`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  max-width: 52ch;
`;

const Lede = styled.p`
  font-family: var(--font-body), sans-serif;
  font-size: 1.0625rem;
  line-height: 1.55;
  color: var(--ink);
`;

const Actions = styled.div`
  display: flex;
  gap: var(--space-3);
  flex-wrap: wrap;
  align-items: center;
`;

const ImageWrap = styled.div`
  grid-area: image;
  position: relative;
  border: var(--rule-w-2) solid var(--ink);
  background: var(--ink);
  aspect-ratio: 4 / 5;
  overflow: hidden;

  @media ${QUERIES.tabletAndDown} {
    aspect-ratio: 16 / 11;
  }
`;

const HeroImage = styled(Image)`
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition: filter 400ms var(--easing);

  ${ImageWrap}:hover & {
    filter: grayscale(0%) contrast(1.05);
  }
`;

const Caption = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 6px 10px;
  font-family: var(--font-mono), monospace;
  font-size: 0.6875rem;
  letter-spacing: 0.08em;
  background: var(--bone);
  color: var(--ink);
  border-top: var(--rule-w) solid var(--ink);
  border-right: var(--rule-w) solid var(--ink);
`;
