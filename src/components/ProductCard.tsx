import { useEffect, useState } from 'react';
import { Comment, ProductCardProps } from '../Types';
import RatingAndComment from './RatingAndComment';
import { formatPrice } from '../helpers/formatPrice';

function ProductCard({ product, isDetailedView = true }: ProductCardProps) {
  const [, setComments] = useState<Comment[]>([]);
  const { id, thumbnail, title, price } = product;

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(id) || '[]');
    setComments(savedReviews);
  }, [id]);

  return (
    <div id={ id } className="singleCard">
      <img className="cardImg" src={ thumbnail } alt={ thumbnail } />
      <h3 className="text-left line-clamp-2 overflow-hidden text-ellipsis">
        {title}
      </h3>
      <h2 className="text-center font-bold">
        R$
        {' '}
        {formatPrice(price)}
      </h2>

      {isDetailedView && <RatingAndComment productId={ id } />}
    </div>
  );
}

export default ProductCard;
