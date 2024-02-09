import { ProductContainer } from '@/containers/product';
import { Product } from '@/types/product';
import { Suspense } from 'react';
import Loading from './loading';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;
  const product = (await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json(),
  )) as Product;
  const productImage = product.image;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    openGraph: {
      title: product.title,
      images: [productImage, ...previousImages],
    },
  };
}

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

  return (
    <Suspense fallback={<Loading />}>
      <ProductContainer data={product} />
    </Suspense>
  );
}
