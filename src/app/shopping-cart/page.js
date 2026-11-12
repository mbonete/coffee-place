import CartView from '../components/CartView';

export const metadata = {
  title: 'Cart',
  description: 'Your order, printed as you go.',
};

export default function ShoppingCartPage() {
  return <CartView />;
}
