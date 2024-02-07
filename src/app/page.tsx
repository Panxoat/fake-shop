import { HomeContainer } from '../containers/page';

export default async function Home() {
  const data = await fetch('https://fakestoreapi.com/products').then((res) =>
    res.json(),
  );

  return (
    <main className="flex flex-col items-center gap-y-[30px]">
      <HomeContainer data={data} />
    </main>
  );
}
