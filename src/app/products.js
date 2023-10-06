const products = {
  bag: {
    src: '/coffee-bag.png',
    alt: 'coffee bag',
    name: 'Filter Coffee',
    description: 'Ground coffee suited for use in drip coffee makers, delivering a convenient and consistent brewing experience.',
    price: '3.99'
  },
  espresso: {
    src: '/coffee1.jpg',
    alt: 'Espresso',
    name: 'Espresso',
    description: 'Concentrated and bold espresso shot with a rich and intense flavor.',
    price: '1.25'
  },
  icedLatte: {
    src: '/coffee2.jpg',
    alt: 'Iced Latte',
    name: 'Iced Latte',
    description: 'Refreshing and creamy chilled coffee beverage made by combining espresso with cold milk and ice.',
    price: '2.85'
  },
  americano: {
    src: '/americano-coffee.jpg',
    alt: 'americano coffee',
    name: 'Americano',
    description: 'A Caffè Americano is a coffee made by diluting espresso with hot water, resulting in a milder yet flavorful coffee beverage.',
    price: '2.25'
  },
  capuccino: {
    src: '/coffee3.jpg',
    alt: 'capuccino',
    name: 'Capuccino',
    description: 'Espresso, steamed milk, and milk foam, creating a creamy and flavorful drink.',
    price: '2.5'
  },
  macchiato: {
    src: '/coffee4.png',
    alt: 'caramel macchiato',
    name: 'Caramel Macchiato',
    description: 'Espresso, vanilla syrup, steamed milk, and caramel sauce.',
    price: '3.95'
  },
};

Object.keys(products).forEach((key) => {
  products[key] = {
    productId: key,
    ...products[key],
  }
});

export default products;