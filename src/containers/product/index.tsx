import { ImageComponent } from '@/components/Image';
import { Product } from '@/types/product';

interface ProductContainerProps {
  data: Product;
}

export const ProductContainer = ({ data }: ProductContainerProps) => {
  return (
    <main className="flex items-start gap-x-[20px]">
      <section className="border">
        <ImageComponent
          containerw={500}
          containerh={500}
          src={data.image}
          alt="product detail img"
        />
      </section>
      <section>
        <h1 className="text-[40px] font-bold">{data.title}</h1>
        <p>{data.description}</p>
        <hr className="my-[10px]" />
        <p className="text-[20px] text-[#cb1400] font-semibold">
          ${data.price}
        </p>
      </section>
    </main>
  );
};
