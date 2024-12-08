import { useEffect, useState } from 'react';
import { Comment, ProductCardProps } from '../Types';
import RatingAndComment from './RatingAndComment';
import { formatPrice } from '../helpers/formatPrice';

function DetailedProduct({ product, isDetailedView = true }: ProductCardProps) {
  const [, setComments] = useState<Comment[]>([]);
  const {
    id,
    thumbnail,
    title,
    price,
    available_quantity: inStock,
    shipping: { free_shipping: shipping },
  } = product;

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(id) || '[]');
    setComments(savedReviews);
  }, [id]);

  return (
    <div id={ id }>
      <img className="cardImg" src={ thumbnail } alt={ thumbnail } />
      <h3 className="text-left line-clamp-2 overflow-hidden text-ellipsis">
        {title}
      </h3>
      <h2 className="text-center font-bold">
        R$
        {' '}
        {formatPrice(price)}
      </h2>
      <p>
        Em estoque:
        {' '}
        {inStock}
      </p>
      {shipping && <h5>Frete Grátis</h5>}

      {isDetailedView && <RatingAndComment productId={ id } />}
    </div>
  );
}

export default DetailedProduct;
