'use client';

import { ImageComponent } from '@/components/Image';
import { Product } from '@/types/product';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

interface HomeProps {
  data: Product[];
}

const SORT_OPTIONS = [
  {
    value: 'default',
    name: 'Default',
  },
  {
    value: 'asc',
    name: 'Price: High - High',
  },
  {
    value: 'desc',
    name: 'Price: High - Low',
  },
];

export const HomeContainer = ({ data }: HomeProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateSorting(sortOrder: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('sort', sortOrder);

    router.push(`/?sort=${sortOrder}`);
  }

  return (
    <>
      <section className="w-full px-[40px] pt-[20px]">
        <div className="flex gap-x-[20px] justify-start bg-gray-100 py-[10px] px-[10px]">
          {SORT_OPTIONS.map((option) => (
            <label
              key={option.value}
              htmlFor={option.value}
              className="flex items-center gap-x-[5px]"
            >
              <input
                id={option.value}
                value={option.value}
                type="radio"
                name="sort"
                checked={
                  option.value === (searchParams.get('sort') || 'default')
                }
                onChange={() => {
                  updateSorting(option.value);
                }}
              />
              <span className="text-[13px]">{option.name}</span>
            </label>
          ))}
        </div>
      </section>
      <section className="w-[100%] flex flex-wrap items-center justify-center gap-y-[10px]">
        {data.map((el) => (
          <div
            key={el.id}
            className="group w-[300px] h-[400px] p-[25px] border-b border-[1px_solid]"
          >
            <Link href={`/product/${el.id}`}>
              <div className="cursor-pointer flex flex-col items-center w-full h-full p-[25px] hover:shadow-lg">
                <div className="w-[250px] h-[250px]">
                  <ImageComponent src={el.image} alt="product img" />
                </div>
                <p className="w-full text-[12px] pt-[10px] pb-[5px] group-hover:underline">
                  {el.title}
                </p>
                <p className="w-full text-[#cb1400] text-[20px]">${el.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};
