import { HomeContainer } from '@/containers/page';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const categories = (await fetch(
    'https://fakestoreapi.com/products/categories',
  ).then((res) => res.json())) as Category;

  return categories.map((category) => ({
    category,
  }));
}

export default async function ProductByCategory({
  params,
}: {
  params: {
    category: Category;
  };
}) {
  const { category } = params;

  const data = await fetch(
    `https://fakestoreapi.com/products/category/${category}`,
  ).then((res) => res.json());

  return (
    <main className="flex flex-col items-center gap-y-[30px]">
      <Suspense>
        <HomeContainer data={data} />
      </Suspense>
    </main>
  );
}

// export const runtime = 'edge';
