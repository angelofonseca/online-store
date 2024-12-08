import { useEffect, useState } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Comment, ProductCardProps } from '../Types';
import RatingAndComment from './RatingAndComment';
import { formatPrice } from '../helpers/formatPrice';
import AddToCart from './AddToCart';
import { useProductContext } from '../context/ProductContext';
import { createURLSlug } from '../helpers/createURLSlug';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

function ProductCard({ product, isDetailedView = true }: ProductCardProps) {
  const [, setComments] = useState<Comment[]>([]);
  const { saveProduct } = useProductContext();
  const { id, thumbnail, title, price, shipping: { free_shipping: shipping } } = product;
  const navigate = useNavigate();

  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem(id) || '[]');
    setComments(savedReviews);
  }, [id]);

  const handleClick = () => {
    saveProduct(product);
    navigate(`/product/${createURLSlug(product.title)}`);
  };

  const installmentPrice = price / 10;

  return (
    <Card id={ id } className="flex flex-col h-full">
      <CardHeader className="relative pt-[75%]">
        <button
          onClick={ handleClick }
          className="absolute top-0 left-0 w-full h-full p-0 border-0 bg-transparent cursor-pointer"
          aria-label={ `View details for ${title}` }
        >
          <img
            className="w-full h-full object-cover"
            src={ thumbnail }
            alt={ title }
          />
        </button>
      </CardHeader>
      <CardContent className="p-4 flex flex-col flex-grow">
        <button className="text-left hover:underline" onClick={ handleClick }>
          <CardTitle className="text-sm font-medium line-clamp-2 mb-2 flex-grow">
            {title}
          </CardTitle>
        </button>
        <div className="mt-auto">
          <div className="flex items-center justify-between">
            <CardDescription className="text-lg font-bold">
              R$
              {' '}
              {formatPrice(price)}
            </CardDescription>
            {shipping && (
              <div className="text-white text-xs rounded-full bg-green-700 px-2 py-1 flex items-center">
                <MdLocalShipping className="mr-1" />
                <span>Frete Grátis</span>
              </div>
            )}
          </div>
          <CardDescription className="text-sm text-gray-500">
            ou 10x de R$
            {' '}
            {formatPrice(installmentPrice)}
          </CardDescription>
          <AddToCart product={ product } />
        </div>
      </CardContent>
      {isDetailedView && (
        <CardFooter>
          <RatingAndComment productId={ id } />
        </CardFooter>
      )}
    </Card>
  );
}

export default ProductCard;
