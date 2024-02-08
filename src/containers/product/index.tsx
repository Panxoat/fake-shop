import { ImageComponent } from '@/components/Image';
import { Product } from '@/types/product';

interface ProductContainerProps {
  data: Product;
}

export const ProductContainer = ({ data }: ProductContainerProps) => {
  return (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <p>{data.price}</p>
      <ImageComponent src={data.image} alt="product detail img" />
    </div>
  );
};
