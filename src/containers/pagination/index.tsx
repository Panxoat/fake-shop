'use client';

import { ImageComponent } from '@/components/Image';
import { useObserver } from '@/hooks/useObserver';
import { useRef, useState } from 'react';

interface PaginationProps {
  data: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }[];
}

let options = {
  threshold: 1.0,
};

export const PaginationContainer = ({ data }: PaginationProps) => {
  const [product, setProduct] = useState(data);
  const [count, setCount] = useState(data.length + 5);

  const fetchFn = async () => {
    const moreProduct = (await fetch(
      `https://fakestoreapi.com/products?limit=${count}`,
    ).then((res) => res.json())) as any[];

    setProduct(moreProduct);
    setCount((prev) => prev + 5);
  };

  const { ref: target } = useObserver({
    callback: () => {
      fetchFn();
    },
  });

  return (
    <>
      <section>
        <h1 className="pt-[40px]">Fake Shop</h1>
      </section>
      <section className="w-[100%] flex flex-col items-center justify-center gap-y-[10px]">
        {product.map((el) => (
          <div
            key={el.id}
            className="group w-[300px] h-[400px] p-[25px] border-b border-[1px_solid]"
          >
            <div className="cursor-pointer flex flex-col items-center w-full h-full p-[25px] hover:shadow-lg">
              <ImageComponent src={el.image} alt="product img" />
              <p className="w-full text-[12px] pt-[10px] pb-[5px] group-hover:underline">
                {el.title}
              </p>
              <p className="w-full text-[#cb1400] text-[20px]">${el.price}</p>
            </div>
          </div>
        ))}
        <div ref={target} />
      </section>
    </>
  );
};
