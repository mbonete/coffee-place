---
version: 1
slug: "src-app-page-js"
primary_target: "src/app/page.js"
related_targets: ["src/app/products/page.js","src/app/shopping-cart/page.js","src/app/about/page.js"]
---

# Surface brief: The Coffee Place (whole site)

Scope: home, menu, product detail, cart/checkout, about. Visitor mode: Persuade (home), with menu/cart as light Operate inside the same world.
Audience: recruiters and engineering managers from the portfolio; ~30 s to judge craft; often on a phone.
Action: add a drink to the cart from the first viewport; finish checkout and see the receipt.
Proof/content: six menu items (src/app/products.js), shop voice, stock photos printed as duotones. No fake reviews or press.
Memorable moment: a sachet tears open into its product page (view transition), and the receipt prints itself as the cart changes.

## Direction contract

THESIS: The menu is a numbered collectible series of six sugar sachets, each printed in its own spot ink and scattered on a pistachio café table. Refuses the latte-photo hero over a row of product cards, and refuses the incumbent editorial-brutalist bone/acid-yellow look.

OWN-WORLD: Pistachio Formica table (#B8D88A) as ground everywhere; glossy white sachet paper with crimped seams, dashed tear line and small print; one spot ink per drink (oxblood, cobalt, rose, sky, amber, bottle green) plus near-black; house red (#D7262E) reserved for action only (Add stamps, cart, pay). Bowlby One flexo display over Barlow Condensed small print and Barlow body. Tones come only from print: solid inks, halftone dots, duotone photos. Thermal receipt paper for the order.

STORY: The visitor sees six printed sachets, understands it is a small shop with six staples, adds one with the stamp, opens one to see what is inside, and checks out to a printed receipt.

FIRST VIEWPORT: Desktop: wordmark left, Menu/About and red Cart (count) right. Left column: Bowlby headline "Six staples. Collect the series." at ~6rem and a two-line lede. Right two-thirds: six sachets scattered with small rotations; the lead Espresso sachet is largest, its name at architectural scale running off its own seam. Each sachet shows N° x/6, volume, price and a working red "+ Add" stamp. Phone: headline then a two-column scatter of sachets.

FORM: Sachet Series, position 6 of 7 on the grounded list. seed:58be628c591f829a. Signature interaction: sachet tears open into its detail page (React ViewTransition morph + tear reveal). Motion grammar: sachets land in series order on first load; duotone plates slide into register on scroll; receipt feeds a line per cart change; cart count flips. All static under reduced motion.
Raises: house red reserved for action (Paper Automata); tones only from print (One-bit Desktop); state prints itself on the receipt (Phosphor Terminal); choreographed arrival (Garden Vistas); house name at architectural scale cropped by the frame (Street Poster).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

Unresolved: whether the menu, prices and voice are final (treated as placeholder content per PRODUCT.md).
