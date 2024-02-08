import { ImageComponent } from '@/components/Image';
import { Product } from '@/types/product';
import Link from 'next/link';

interface HomeProps {
  data: Product[];
}

export const HomeContainer = ({ data }: HomeProps) => {
  return (
    <>
      <section>
        <h1 className="pt-[40px]">Fake Shop</h1>
      </section>
      <section className="w-[100%] flex flex-wrap items-center justify-center gap-y-[10px]">
        {data.map((el) => (
          <div
            key={el.id}
            className="group w-[300px] h-[400px] p-[25px] border-b border-[1px_solid]"
          >
            <div className="cursor-pointer flex flex-col items-center w-full h-full p-[25px] hover:shadow-lg">
              <Link href={`/product/${el.id}`}>
                <ImageComponent src={el.image} alt="product img" />
                <p className="w-full text-[12px] pt-[10px] pb-[5px] group-hover:underline">
                  {el.title}
                </p>
                <p className="w-full text-[#cb1400] text-[20px]">${el.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
