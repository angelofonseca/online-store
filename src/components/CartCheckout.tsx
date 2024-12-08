import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Product } from '../Types';
import { useCartContext } from '../context/CartContext';
import { formatPrice } from '../helpers/formatPrice';

export default function CartCheckout() {
  const { cart, cartLength, totalPrice } = useCartContext();

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>
          Produtos (
          {cartLength}
          )
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full rounded-md border p-4">
          {Object.values(cart).map((product: Product & { quantity: number }) => (
            <div key={ product.id } className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src={ product.thumbnail }
                  alt=""
                  width="48"
                  height="48"
                  className="mr-3 rounded-md object-cover"
                />
                <div>
                  <p className="font-medium">{product.title}</p>
                  <p className="text-sm text-gray-500">
                    Quantidade:
                    {' '}
                    {product.quantity}
                  </p>
                </div>
                <p className="text-sm">
                  R$&nbsp;
                  {formatPrice((product.price * product.quantity))}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="mt-4 flex justify-between items-center font-bold">
          <p>Total:</p>
          <p>
            R$
            {' '}
            {formatPrice(totalPrice)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
