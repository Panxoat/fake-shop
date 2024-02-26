import { Suspense } from 'react';
import { HomeContainer } from '../containers/page';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { sort } = searchParams;

  const baseUrl = 'https://fakestoreapi.com/products';
  const url = !sort || sort === 'default' ? baseUrl : `${baseUrl}?sort=${sort}`;

  const data = await fetch(url).then((res) => res.json());

  return (
    <main className="flex flex-col items-center gap-y-[30px]">
      <Suspense>
        <HomeContainer data={data} />
      </Suspense>
    </main>
  );
}

export const runtime = 'edge';
