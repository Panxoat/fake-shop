import { ProductContainer } from '@/containers/product';
import { Product } from '@/types/product';

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

  const product = (await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json(),
  )) as Product;

  return <ProductContainer data={product} />;
}
