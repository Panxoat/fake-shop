import { ProductContainer } from '@/containers/product';
import { Product } from '@/types/product';
import { Suspense } from 'react';
import Loading from './loading';

export async function generateStaticParams() {
  const products = (await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json(),
  )) as Product[];

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Product({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = params;

  const product = (await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: 'no-cache',
  }).then((res) => res.json())) as Product;

  return (
    <Suspense fallback={<Loading />}>
      <ProductContainer data={product} />
    </Suspense>
  );
}
