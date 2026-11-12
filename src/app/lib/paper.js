import { css } from 'styled-components';

// Pinked (zig-zag) paper edges, drawn with conic-gradient masks.
// `tooth` is the width of one tooth; its depth is half of that.

const notch = (from, at) =>
  `conic-gradient(from ${from} at ${at}, #0000, #000 1deg 89deg, #0000 90deg)`;

const mask = (layers) => css`
  -webkit-mask: ${layers};
  -webkit-mask-composite: source-in;
  mask: ${layers};
  mask-composite: intersect;
`;

/** Top and bottom edges pinked: a sachet standing upright. */
export const pinkedY = (tooth) =>
  mask(`${notch('-45deg', 'bottom')} 50% / ${tooth} 100%, ${notch('135deg', 'top')} 50% / ${tooth} 100%`);

/** Left and right edges pinked: a sachet lying on its side. */
export const pinkedX = (tooth) =>
  mask(`${notch('225deg', 'right')} 50% / 100% ${tooth}, ${notch('45deg', 'left')} 50% / 100% ${tooth}`);

/** Only the bottom edge pinked: paper torn or cut at the top. */
export const pinkedBottom = (tooth) => css`
  -webkit-mask: ${notch('-45deg', 'bottom')} 50% / ${tooth} 100%;
  mask: ${notch('-45deg', 'bottom')} 50% / ${tooth} 100%;
`;

/** Only the top edge pinked. */
export const pinkedTop = (tooth) => css`
  -webkit-mask: ${notch('135deg', 'top')} 50% / ${tooth} 100%;
  mask: ${notch('135deg', 'top')} 50% / ${tooth} 100%;
`;

/** Heat-seal crimp: fine vertical ridges pressed into the seam. */
export const crimp = css`
  background-color: var(--paper-shade);
  background-image: repeating-linear-gradient(90deg, rgb(20 17 15 / 0.08) 0 1px, transparent 1px 3px);
`;

/** Heat-seal crimp on a sachet lying on its side. */
export const crimpX = css`
  background-color: var(--paper-shade);
  background-image: repeating-linear-gradient(0deg, rgb(20 17 15 / 0.08) 0 1px, transparent 1px 3px);
`;
