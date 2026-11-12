'use client';
import styled from 'styled-components';
import { QUERIES } from '../lib/breakpoints';
import { pinkedX, crimpX } from '../lib/paper';
import Duotone from './Duotone';

const RULES = [
  {
    title: 'No syrup wall.',
    body: 'We do not bend coffee into a dessert. The caramel macchiato is our one concession, and we are at peace with it.',
  },
  {
    title: 'Roasted Sunday.',
    body: 'The bag you order on Tuesday was roasted on Sunday. Nothing sits on a shelf long enough to forget where it came from.',
  },
  {
    title: 'Ground to order.',
    body: 'The espresso in your cup was ground seconds before it was pulled. Every step, from bean to grind to extraction, gets re-checked weekly.',
  },
];

// The back of a sachet, laid on its side: where the house rules are printed.
export default function HouseRules() {
  return (
    <Section aria-labelledby="rules-heading">
      <Sheet>
        <Seam aria-hidden="true" />
        <Body>
          <Photo>
            <Duotone
              src="/coffee-machine.jpg"
              alt="An espresso machine mid-shot, portafilter locked in"
              ink="#7A1E2C"
              sizes="(max-width: 1024px) 90vw, 32vw"
              aspect="4 / 5"
            />
          </Photo>
          <Text>
            <Heading id="rules-heading">House rules.</Heading>
            <Rules>
              {RULES.map((rule) => (
                <Rule key={rule.title}>
                  <RuleTitle>{rule.title}</RuleTitle>
                  <RuleBody>{rule.body}</RuleBody>
                </Rule>
              ))}
            </Rules>
            <Ingredients>
              <strong>Ingredients:</strong> coffee, water, milk where stated, ice when asked,
              and a firm opinion about all of it.
            </Ingredients>
          </Text>
        </Body>
        <Seam aria-hidden="true" />
      </Sheet>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  max-width: var(--page-max);
  margin: var(--space-16) auto 0;
  padding: 0 var(--gutter);
`;

const Sheet = styled.div`
  display: flex;
  background: var(--paper);
  filter: var(--shadow-sachet);
  transform: rotate(-0.6deg);
  ${pinkedX('12px')}

  @media ${QUERIES.tabletAndDown} {
    transform: none;
  }
`;

const Seam = styled.div`
  flex: none;
  width: clamp(14px, 2vw, 26px);
  ${crimpX}
`;

const Body = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: clamp(24px, 4vw, 64px);
  padding: clamp(24px, 4vw, 56px);
  align-items: center;

  @media ${QUERIES.tabletAndDown} {
    grid-template-columns: 1fr;
  }
`;

const Photo = styled.div`
  @media ${QUERIES.tabletAndDown} {
    max-width: 420px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
`;

const Heading = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  color: #7A1E2C;
`;

const Rules = styled.dl`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--space-6);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: var(--space-5);
  }
`;

const Rule = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding-top: var(--space-3);
  border-top: 2px dashed rgb(20 17 15 / 0.4);
`;

const RuleTitle = styled.dt`
  font-family: var(--font-display), sans-serif;
  font-size: 1.375rem;
  line-height: 1;
`;

const RuleBody = styled.dd`
  margin: 0;
  max-width: 46ch;
  color: var(--ink-soft);
`;

const Ingredients = styled.p`
  max-width: 62ch;
  font-family: var(--font-small), sans-serif;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.35;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--ink-soft);

  strong { color: var(--ink); font-weight: 700; }
`;
