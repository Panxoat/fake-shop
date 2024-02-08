'use client';

import Link from 'next/link';

export default function Header({ categories }: { categories: Category }) {
  return (
    <section className="flex flex-col items-center gap-y-[20px] pb-[20px] border-b-2">
      <Link href="/">
        <h1 className="text-[40px] font-bold">Fake Shop</h1>
      </Link>
      <nav className="flex gap-x-[20px]">
        {categories.map((category) => (
          <Link
            key={category}
            className="cursor-pointer hover:underline"
            href={`/${category}`}
          >
            {category}
          </Link>
        ))}
      </nav>
    </section>
  );
}
