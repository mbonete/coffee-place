'use client';
import Image from 'next/image';
import styled from 'styled-components';

/**
 * A photo printed the way the sachets are: two plates, the drink's spot ink and black,
 * with a halftone screen. As it scrolls into view the black plate slides into register.
 */
export default function Duotone({ src, alt, ink, sizes, priority = false, aspect = '4 / 5', caption }) {
  return (
    <Figure>
      <Frame style={{ '--spot': ink, aspectRatio: aspect }}>
        <InkPlate src={src} alt={alt} fill sizes={sizes} priority={priority} />
        <BlackPlate src={src} alt="" aria-hidden="true" fill sizes={sizes} priority={priority} />
        <Screen aria-hidden="true" />
      </Frame>
      {caption && <Caption>{caption}</Caption>}
    </Figure>
  );
}

const Figure = styled.figure`
  margin: 0;
`;

const Frame = styled.div`
  position: relative;
  overflow: hidden;
  background: var(--spot);
  isolation: isolate;
`;

// Shadows print in the spot ink, highlights stay paper-white.
const InkPlate = styled(Image)`
  object-fit: cover;
  filter: grayscale(1) contrast(1.25) brightness(1.08);
  mix-blend-mode: screen;
`;

// The black plate deepens the shadows; it starts out of register and settles on scroll.
const BlackPlate = styled(Image)`
  object-fit: cover;
  filter: grayscale(1) contrast(1.6) brightness(1.15);
  mix-blend-mode: multiply;
  opacity: 0.55;

  @supports (animation-timeline: view()) {
    @media (prefers-reduced-motion: no-preference) {
      animation: register linear both;
      animation-timeline: view();
      animation-range: entry 10% cover 45%;
    }
  }

  @keyframes register {
    from { transform: translate(14px, -10px) scale(1.02); }
    to   { transform: translate(0, 0) scale(1); }
  }
`;

const Screen = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgb(255 255 255 / 0.2) 1px, transparent 1.3px);
  background-size: 5px 5px;
  mix-blend-mode: soft-light;
  pointer-events: none;
`;

const Caption = styled.figcaption`
  margin-top: var(--space-2);
  font-family: var(--font-small), sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.04em;
  color: var(--table-ink);
`;
