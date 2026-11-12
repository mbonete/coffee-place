'use client';
import styled from 'styled-components';
import { QUERIES } from '../lib/breakpoints';
import { pinkedY, crimp } from '../lib/paper';
import Duotone from './Duotone';

// The back of the sachet: where the shop prints everything it has to say.
export default function AboutSheet() {
  return (
    <Wrapper>
      <Sheet>
        <Seam aria-hidden="true" />
        <Content>
          <Title>The small print.</Title>
          <Lede>
            We are not a brand. We are a shop with six chairs, two grinders, and one strong feeling
            about how a flat white should taste.
          </Lede>

          <Body>
            <p>
              Our room is small and warm, for people who know exactly what they want and people who
              are still deciding. Every cup is made with care, from beans we choose by tasting them,
              not by reading the label.
            </p>
            <p>
              The online shop brings the same six staples home: our filter roast, ground for your
              brewer, and the drinks we make at the bar. The bag you order on Tuesday was roasted on
              Sunday.
            </p>
          </Body>

          <Figure>
            <Duotone
              src="/coffee1.webp"
              alt="An espresso in a white cup, steam rising"
              ink="#2346C8"
              sizes="(max-width: 760px) 90vw, 640px"
              aspect="16 / 10"
            />
          </Figure>

          <Pull>
            We do not have a wall of syrups. We do not have a loyalty app. We have six drinks and a
            long memory for the people who order them.
          </Pull>

          <Body>
            <p>
              We like to know where the bag, the lid and the bean came from, and where they go after.
              It is a small shop; we can afford to ask.
            </p>
            <p>
              Come in, or order from the menu. Either way, it is one cup at a time.
            </p>
          </Body>

          <Signoff>Best before: the next cup.</Signoff>
        </Content>
        <Seam aria-hidden="true" />
      </Sheet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: var(--space-12) var(--gutter) 0;
`;

const Sheet = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--paper);
  filter: var(--shadow-sachet);
  transform: rotate(0.5deg);
  ${pinkedY('12px')}

  @media ${QUERIES.mobile} {
    transform: none;
  }
`;

const Seam = styled.div`
  height: clamp(16px, 2.4vw, 26px);
  ${crimp}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  padding: clamp(28px, 6vw, 72px) clamp(20px, 6vw, 72px) clamp(36px, 6vw, 72px);
`;

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5.5rem);
  color: #2346C8;
`;

const Lede = styled.p`
  font-family: var(--font-display), sans-serif;
  font-size: clamp(1.375rem, 2.6vw, 1.875rem);
  line-height: 1.15;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  max-width: 62ch;
  font-size: 1.125rem;
  line-height: 1.65;
  color: var(--ink-soft);
`;

const Figure = styled.div`
  margin-inline: calc(-1 * clamp(20px, 6vw, 72px));
`;

const Pull = styled.blockquote`
  margin: 0;
  padding: var(--space-6) 0;
  border-block: 2.5px dashed rgb(20 17 15 / 0.45);
  font-family: var(--font-display), sans-serif;
  font-size: clamp(1.5rem, 3vw, 2.125rem);
  line-height: 1.1;
  color: #2346C8;
`;

const Signoff = styled.p`
  font-family: var(--font-small), sans-serif;
  font-weight: 700;
  font-size: 1.0625rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
