// The menu, printed as a numbered series of six sachets.
// Each item carries its own spot ink; recipes and notes are the shop's (fictional) house specs.

const SERIES = [
  {
    productId: 'espresso',
    name: 'Espresso',
    kicker: 'Bold, short, unforgiving.',
    description:
      'A concentrated shot with a rich, intense body. The thing every other drink on this list is built on.',
    price: '1.25',
    volume: '30 ml',
    ink: '#7A1E2C',
    src: '/coffee1.webp',
    alt: 'Espresso in a white cup on a saucer, steam rising',
    notes: 'Dark chocolate, molasses, a dry finish.',
    inside: [{ label: 'Espresso', amount: 30 }],
    brew: [
      ['Dose', '18 g'],
      ['Time', '27 s'],
      ['Water', '93 °C'],
    ],
  },
  {
    productId: 'americano',
    name: 'Americano',
    kicker: 'Espresso, given room.',
    description:
      'A double shot opened up with hot water. Milder, longer, and still unmistakably coffee.',
    price: '2.25',
    volume: '240 ml',
    ink: '#2346C8',
    src: '/americano-coffee.jpg',
    alt: 'Coffee being poured from a glass server into a white cup',
    notes: 'Cocoa, toasted almond, clean and long.',
    inside: [
      { label: 'Espresso', amount: 60 },
      { label: 'Hot water', amount: 180 },
    ],
    brew: [
      ['Dose', '18 g'],
      ['Water first', 'yes'],
      ['Water', '90 °C'],
    ],
  },
  {
    productId: 'cappuccino',
    name: 'Cappuccino',
    kicker: 'Foam with a spine.',
    description:
      'Espresso, steamed milk and a proper cap of foam. Creamy, but the coffee still gets the last word.',
    price: '2.50',
    volume: '180 ml',
    ink: '#B5577A',
    src: '/coffee3.jpg',
    alt: 'Cappuccino with latte art among succulents',
    notes: 'Milk chocolate, hazelnut, sweet foam.',
    inside: [
      { label: 'Espresso', amount: 30 },
      { label: 'Steamed milk', amount: 90 },
      { label: 'Foam', amount: 60 },
    ],
    brew: [
      ['Dose', '18 g'],
      ['Milk', '62 °C'],
      ['Foam', '1.5 cm'],
    ],
  },
  {
    productId: 'iced-latte',
    name: 'Iced Latte',
    kicker: 'Cold milk, hot opinion.',
    description:
      'A double shot poured over ice and cold milk. Refreshing, creamy, and not a milkshake.',
    price: '2.85',
    volume: '350 ml',
    ink: '#3A86BD',
    src: '/coffee2.jpg',
    alt: 'Milk being poured into an iced coffee in a tall glass',
    notes: 'Caramelised sugar, cream, a bright edge.',
    inside: [
      { label: 'Espresso', amount: 60 },
      { label: 'Cold milk', amount: 190 },
      { label: 'Ice', amount: 100 },
    ],
    brew: [
      ['Dose', '18 g'],
      ['Shot over', 'ice'],
      ['Milk', '4 °C'],
    ],
  },
  {
    productId: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    kicker: 'Sweet teeth tolerated.',
    description:
      'Vanilla, steamed milk, espresso poured on top, and a thread of caramel. Our one concession.',
    price: '3.95',
    volume: '300 ml',
    ink: '#C9630F',
    src: '/coffee4.webp',
    alt: 'A hand holding a glass of layered caramel macchiato',
    notes: 'Vanilla, burnt sugar, toffee.',
    inside: [
      { label: 'Vanilla syrup', amount: 15 },
      { label: 'Steamed milk', amount: 220 },
      { label: 'Espresso', amount: 60 },
      { label: 'Caramel', amount: 5 },
    ],
    brew: [
      ['Dose', '18 g'],
      ['Shot', 'on top'],
      ['Milk', '62 °C'],
    ],
  },
  {
    productId: 'filter-coffee',
    name: 'Filter Coffee',
    kicker: 'Our roast, your kettle.',
    description:
      'Our house roast, ground for drip and pour-over brewers. A consistent cup at home, every morning.',
    price: '3.99',
    volume: '250 g',
    ink: '#24382B',
    src: '/coffee-bag.webp',
    alt: 'A bag of filter coffee lying on roasted beans',
    notes: 'Red apple, brown sugar, roasted nuts.',
    inside: [
      { label: 'Ground coffee', amount: 15, unit: 'g' },
      { label: 'Water', amount: 250 },
    ],
    perCup: true,
    brew: [
      ['Ratio', '1 : 16'],
      ['Grind', 'medium'],
      ['Water', '94 °C'],
    ],
  },
];

export const SERIES_SIZE = SERIES.length;

export const series = SERIES.map((item, i) => ({ ...item, number: i + 1 }));

const products = Object.fromEntries(series.map((item) => [item.productId, item]));

export default products;
