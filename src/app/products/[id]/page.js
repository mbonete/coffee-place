import { notFound } from 'next/navigation';
import products, { series } from '../../products';
import ProductDetail from '../../components/ProductDetail';

export function generateStaticParams() {
  return series.map((p) => ({ id: p.productId }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products[id];
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.kicker} ${product.description}`,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  if (!products[id]) notFound();
  return <ProductDetail productId={id} />;
}
