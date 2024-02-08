import { PaginationContainer } from '../../containers/pagination';

export default async function Pagination() {
  const data = await fetch('https://fakestoreapi.com/products?limit=5').then(
    (res) => res.json(),
  );

  return (
    <main className="flex flex-col items-center gap-y-[30px]">
      <PaginationContainer data={data} />
    </main>
  );
}
