# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and engineering managers who click through from Maria Bonete's portfolio (and occasionally from her CV or GitHub). They give the piece roughly thirty seconds to judge front-end and design craft, often on a phone. A deeper visitor opens the repo to see how it was built.

## Product Purpose

The Coffee Place is a fictional coffee shop and online store built as a portfolio piece. It exists to show design range and front-end craft: a distinct visual world, a shop flow that works end to end (browse, add to cart, check out), and motion and detail that hold up on inspection. Success is a visitor finishing the flow and leaving with a clear impression of the author's skill.

## Positioning

A small, opinionated shop with a short menu, presented with a point of view. It is deliberately its own world, separate from the portfolio's aesthetic, to show range.

## Operating Context

Seen inside a recruiting pipeline: opened from the portfolio's project list, with many tabs open, on phones and laptops. The portfolio links both the live site (https://the-coffee-place.vercel.app/) and the repo (github.com/mbonete/coffee-place), and shows a screenshot of the home page as its thumbnail.

## Capabilities and Constraints

- Next.js 16 (App Router), React 19, styled-components 6, JavaScript. Deployed on Vercel.
- Pages: home, menu (products), product detail (planned), cart with checkout, about.
- Cart is client-side only; checkout is simulated. No real payments, accounts, or backend.
- In scope for this upgrade: new visual direction, product detail pages with a view-transition morph, a cart that persists across reloads with tactile feedback and a receipt-style checkout, scroll motion, portfolio packaging (README, social preview image, favicon, optimised images).
- Mobile: LCP under 2.5s on a mid-range phone; motion respects prefers-reduced-motion.
- Free fonts only.
- Open decision: whether the current menu, prices, copy voice and stock photos carry over. Until decided, they are placeholder content that may be rewritten or replaced.

## Brand Commitments

- Name: "The Coffee Place" (used in the portfolio and CV).
- Must not look like a generic AI-generated site.
- Its own visual world; not required to echo the portfolio's references.

## Evidence on Hand

- Menu data in src/app/products.js: six items with names, descriptions and prices.
- Stock photos in public/ (coffee1.jpg, coffee2.jpg, coffee3.jpg, coffee4.png, americano-coffee.jpg, coffee-machine.jpg, coffee-bag.png) and an unused public/coffee-logo.svg.
- The shop is fictional: no real address, opening hours, reviews, testimonials, press, or sales figures exist, and none may be presented as real.

## Product Principles

1. The flow works: every visible control does something, from browsing to the checkout receipt.
2. Craft is visible in thirty seconds and holds up under a closer look, including in the repo.
3. Honest fiction: playful copy is fine, fake proof (reviews, ratings, press) is not.
4. Fast on a phone; motion is an enhancement, never a gate.

## Accessibility & Inclusion

Keyboard-operable shop flow, visible focus, legible contrast, prefers-reduced-motion respected.
