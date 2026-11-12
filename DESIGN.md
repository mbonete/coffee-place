---
name: The Coffee Place
description: Six staples, printed as a numbered series of sugar sachets on a pistachio café table.
colors:
  table: "#B8D88A"
  table-deep: "#A6CC74"
  table-ink: "#2F4A17"
  table-rule: "#86AE53"
  paper: "#FBFAF5"
  paper-shade: "#EFEDE3"
  receipt: "#FFFEF9"
  ink: "#14110F"
  ink-soft: "#4B463F"
  print-white: "#FFFFFF"
  house: "#D7262E"
  house-deep: "#A8161D"
  spot-oxblood: "#7A1E2C"
  spot-cobalt: "#2346C8"
  spot-rose: "#B5577A"
  spot-sky: "#3A86BD"
  spot-amber: "#C9630F"
  spot-bottle: "#24382B"
typography:
  display:
    fontFamily: "Bowlby One, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Bowlby One, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Bowlby One, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1
  lede:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.45
  body:
    fontFamily: "Barlow, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  small-print:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  receipt:
    fontFamily: "Red Hat Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  hairline: "2px"
  stamp: "3px"
  rubber: "4px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  "20": "80px"
  "24": "96px"
  "32": "128px"
  gutter: "clamp(16px, 4vw, 56px)"
  page-max: "1360px"
components:
  button-action:
    backgroundColor: "{colors.house}"
    textColor: "{colors.print-white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "10px 22px"
    height: "48px"
  button-action-hover:
    backgroundColor: "{colors.house-deep}"
    textColor: "{colors.print-white}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "10px 22px"
    height: "48px"
  button-ink-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "10px 22px"
    height: "48px"
  button-paper-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  add-stamp:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.house}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "4px 12px 4px 9px"
    height: "36px"
  add-stamp-in-cart:
    backgroundColor: "{colors.house}"
    textColor: "{colors.print-white}"
  add-stamp-large:
    padding: "6px 16px 6px 12px"
    height: "44px"
  nav-cart:
    backgroundColor: "{colors.house}"
    textColor: "{colors.print-white}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    height: "44px"
  nav-cart-hover:
    backgroundColor: "{colors.house-deep}"
  quantity-stepper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.stamp}"
    size: "40px"
  sachet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
  receipt:
    backgroundColor: "{colors.receipt}"
    textColor: "{colors.ink}"
    typography: "{typography.receipt}"
    padding: "32px 24px 40px"
    width: "420px"
---

# Design System: The Coffee Place

## Overview

**Creative North Star: "The Sachet Series"**

Every surface is printed matter lying on a café table. The ground is pistachio Formica with a fine printed fleck; on it sit glossy white sugar sachets with crimped heat-seal seams, pinked edges, a dashed tear line and condensed small print, each carrying one drink's spot ink. The order is a strip of thermal receipt paper. Nothing is a card, a panel or a glass sheet: if it holds content, it is a piece of paper with a believable edge.

The look is flexographic packaging print: heavy, slightly crude display lettering, flat spot colours, halftone screens, duotone photographs printed in two plates. Objects are scattered with small rotations, as if dropped, and the house name runs at a scale the frame has to crop. Density is low on the table and high on the paper, where small print, numbers and rules pack in the way they do on real packaging.

Colour is disciplined by job. The table and paper are the room; near-black ink does all the talking; one spot ink belongs to each drink; and house red is the only colour you can press to buy.

**Key Characteristics:**
- Pistachio Formica ground on every page, never white.
- Content lives on paper objects (sachets, sheets, receipt) with pinked edges and crimped seams.
- One spot ink per drink, carried through its sachet, price, duotone photo and detail page.
- House red appears only on buying controls.
- Tone comes from print: solid inks, halftone dot screens, duotone plates.
- Bowlby One flexo display, Barlow Condensed small print, Barlow body, Red Hat Mono on the receipt only.

## Colors

A pistachio table, white printed paper, near-black ink, six drink inks and one red that means "buy".

### Primary
- **House Red** (`house`): the Add stamp, the header Cart and the Pay button, and nothing else. **House Red Deep** (`house-deep`) is its hover and pressed-in-cart state.

### Secondary
- **The Spot Inks**, one per drink in series order: **Oxblood** (`spot-oxblood`, Espresso), **Cobalt** (`spot-cobalt`, Americano), **Dusty Rose** (`spot-rose`, Cappuccino), **Sky** (`spot-sky`, Iced Latte), **Burnt Amber** (`spot-amber`, Caramel Macchiato), **Bottle Green** (`spot-bottle`, Filter Coffee). Each fills its sachet's ink panel (with white type), colours its price, tints its duotone photo, and themes its detail page through a `--spot` custom property. Editorial sheets borrow one ink each: House Rules prints in oxblood, About in cobalt.

### Neutral
- **Pistachio Formica** (`table`): the page ground everywhere, with a two-layer fleck printed into it. Also the browser theme colour and the footer signature lettering.
- **Formica Edge** (`table-deep`): scrollbar track and deeper laminate.
- **Table Ink** (`table-ink`): secondary text set directly on the table (counts, captions, status, series numbers).
- **Table Rule** (`table-rule`): rules drawn on the table: header underline, dashed cart and spec dividers.
- **Sachet Paper** (`paper`): every sachet and sheet; also the light side of ink buttons.
- **Seam Paper** (`paper-shade`): the crimped heat-seal seams.
- **Thermal Paper** (`receipt`): the receipt only.
- **Press Black** (`ink`): text, ink buttons, the footer slab, the PAID stamp, focus rings.
- **Faded Ink** (`ink-soft`): secondary text on paper (rule bodies, receipt sums, tear line label).
- **Print White** (`print-white`): type knocked out of a spot-ink panel or house red.

### Named Rules
**The Red Means Buy Rule.** House red is reserved for buying actions: Add stamps, the Cart link, Pay. Confirmations, headings, errors and decoration never use it; the PAID stamp is deliberately press black.

**The One Ink Per Drink Rule.** A drink's spot ink is its identity. Anything about that drink (sachet, price, photo, composition bar, detail page) prints in that ink and no other.

**The Tone From Print Rule.** Tone comes only from print: solid spot inks, halftone radial-dot screens, and two-plate duotones. Gradient functions appear only as dot screens, the Formica fleck, crimp ridges and pinked-edge masks, never as a smooth colour ramp.

## Typography

**Display Font:** Bowlby One (with sans-serif)
**Body Font:** Barlow (with system-ui, sans-serif)
**Label/Mono Font:** Barlow Condensed for small print and controls; Red Hat Mono for the receipt only

**Character:** Bowlby One is the heavy flexo lettering printed on the sachets: blunt, a little crude, always weight 400. Barlow Condensed is the packaging small print, set bold and tracked in capitals. Barlow carries reading text quietly in between.

### Hierarchy
- **Display** (Bowlby One 400, clamp(3rem, 7vw, 6rem), 0.88): page titles on menu, product, cart. The footer signature runs the house name at clamp(4rem, 15.5vw, 15rem), cropped by the page edge.
- **Headline** (Bowlby One 400, clamp(2.25rem, 4.4vw, 3.75rem), 0.95): section headings. The home headline sits at clamp(2.5rem, 3.9vw, 3.875rem); editorial sheet titles go up to 4.5–5.5rem in their spot ink.
- **Title** (Bowlby One 400, 1.5rem, 1): block headings, rule titles, cart line names, prices.
- **Lede** (Barlow 500, clamp(1.125rem, 1.4vw, 1.25rem), 1.45): the opening paragraph, max 34ch.
- **Body** (Barlow 400, 1.0625rem, 1.55, tabular numerals): reading text at 46–62ch.
- **Label** (Barlow Condensed 700, 1.0625rem, 0.08em, uppercase): nav, buttons, stamps, back and onward links.
- **Small Print** (Barlow Condensed 600–700, 0.9375rem, 0.04–0.12em, uppercase): N° x/6, volumes, specs, ingredients, footer column titles.
- **Receipt** (Red Hat Mono 400/600, 0.9375rem, 1.4, uppercase): the order ticket.

### Named Rules
**The Lettering Is Printed Rule.** Display type is Bowlby One at weight 400 with tight leading (0.8–0.95). Inside a sachet it scales with the paper in container units, and the lead sachet's name may run off its own seam.

**The Receipt Printer Rule.** Red Hat Mono appears only on the receipt.

## Layout

Pages sit in a centred column (max 1360px) with a fluid gutter (clamp(16px, 4vw, 56px)). Spacing follows a 4px base scale; sections on the table are separated by 64–96px.

The home table is a four-column grid ('copy lead a b' / 'e lead c d') where the lead sachet spans two rows; slots are nudged off the grid with percentage margins and each sachet carries its own rotation (−7° to +10°). At ≤1024px it becomes a three-column scatter under the copy, and at ≤600px a two-column scatter with staggered offsets. Breakpoints: 600px (mobile), 1024px (tablet), 1440px (desktop).

Product detail is a 5:7 split with a sticky open sachet; cart is 1.55:1 lines-to-receipt. Both collapse to one column at ≤1024px. Sachets use container queries so their print scales with the paper.

## Elevation & Depth

Depth is physical: paper lying on a table. Paper objects carry a soft green-tinted drop shadow (from the table ink, never grey) built with `filter: drop-shadow` so it follows pinked edges. Hover lifts a sachet and deepens its shadow. Everything else is flat: buttons, stamps and the header have no shadow.

### Shadow Vocabulary
- **Sachet rest** (`--shadow-sachet`: drop-shadow(0 1px 0 rgb(47 74 23 / 0.35)) drop-shadow(0 12px 14px rgb(47 74 23 / 0.32))): sachets, sheets, collector minis, the receipt.
- **Sachet lift** (`--shadow-sachet-lift`: drop-shadow(0 1px 0 rgb(47 74 23 / 0.35)) drop-shadow(0 22px 22px rgb(47 74 23 / 0.36))): hover and focus-within on table sachets.

### Named Rules
**The Paper On A Table Rule.** Only paper casts a shadow, and it is cast onto the table in table-ink green. Controls are printed or stamped, so they stay flat.

## Shapes

Paper has no rounded corners: its edges are pinked (zig-zag, drawn with conic-gradient masks; 10px teeth on sachets, 12px on sheets and the receipt foot, 14px on torn edges). Sachets stand at 5:7.2 with crimped seams top and bottom; editorial sheets lie on their side with seams left and right. The receipt has a straight top and a pinked bottom.

Rules are dashed (2–2.5px), echoing the tear line; receipt leaders are dotted. Controls take a barely-there 3px corner, like a rubber stamp; the PAID stamp 4px; count badges are pills. The sugar-bowl cart icon and feather icons share a 2px stroke.

## Components

### Buttons
Stamped and condensed: heavy capitals in a bordered block.
- **Shape:** near-square (3px), 2.5px border, min height 48px.
- **Action:** house red with white type, house-red-deep on hover. Buying only (Pay).
- **Ink:** press black with paper type; inverts to paper on hover. The default for every non-buying button.
- **Paper:** paper with an ink border; inverts to ink on hover.
- **Hover / Focus:** colour swap in 140ms; pressed nudges down 1px; focus is a 3px ink outline offset 3px. Disabled drops to 45% opacity.

### Add Stamp
A rubber stamp in house red, tilted −7°, overlapping the sachet's edge. Paper fill with a 3px red border at rest; filled red with white type once the drink is in the cart, showing a white pill count. Each press replays a 360ms "thunk" (scale 1.22 → 0.94 → 1). An 8px invisible halo enlarges the hit area. Large variant (44px) on lead and open sachets.

### Navigation
Sticky header on the table with a 2px table-rule underline. Wordmark in Bowlby One left; Menu and About in label type, marked by a dashed underline that draws in on hover and stays for the current page. The Cart link is a house-red block with the sugar-bowl icon and a paper count window whose number flips in on change. Under 420px the word "Cart" hides.

### Quantity Stepper
Paper strip with a 2px ink border, two 40px square steppers and a Bowlby count between ink dividers; steppers invert to ink on hover.

### Sachet (signature)
Pinked paper with crimped seams, an inset spot-ink panel carrying a halftone screen and the name in white Bowlby One, a row of small print (N° x/6, volume), a dashed "Tear here" line with scissors, and the price in the spot ink. Variants: default, lead (full-bleed panel, name cropped), open (top seam torn off, used on the product page), mini (cart thumbnail with just the number). Sachets land in series order on first load and morph into the product page through a view transition while the torn strip flies off.

### Receipt (signature)
Thermal paper, max 420px, Red Hat Mono in capitals. Dashed rules, dotted leaders, a large total, and one full-width button: Pay (action) or "Tear off, start over" (ink). Each cart change prints a line in six steps. On payment a press-black PAID stamp lands rotated −14° with multiply blend; tearing off swings the ticket away.

### Duotone
Photos printed in two plates: a spot-ink plate (grayscale, screen blend) and a black plate (multiply), under a halftone screen. The black plate slides into register as it scrolls into view.

### Collector Strip
Six mini sachets in series order with crimped seams; an empty slot shows an outlined, screened number, and a collected slot inks in solid.

## Do's and Don'ts

### Do:
- **Do** put every page on the pistachio table with its printed fleck, and put content on paper with pinked edges.
- **Do** give each drink its own spot ink and carry it through sachet, price, photo and detail page.
- **Do** use house red only for Add, Cart and Pay; make confirmations, including the PAID stamp, in press black.
- **Do** build tone from halftone dot screens and duotone plates, and print photographs as duotones in the drink's ink.
- **Do** set controls in Barlow Condensed 700 capitals with 0.08em tracking and a 3px corner.
- **Do** cast shadows only from paper, in table-ink green, via drop-shadow so they follow the pinked edge.
- **Do** keep every motion static under prefers-reduced-motion.

### Don't:
- **Don't** use house red for headings, links, errors, badges or decoration.
- **Don't** use smooth gradients for tone, or glass, blur or backdrop-filter anywhere.
- **Don't** put content on rounded white cards; use a sachet, a sheet or the receipt.
- **Don't** use grey or offset hard shadows, or shadows on buttons and stamps.
- **Don't** use Red Hat Mono outside the receipt, or set Bowlby One in any weight but 400.
- **Don't** mix two drinks' inks on one drink's surface.
