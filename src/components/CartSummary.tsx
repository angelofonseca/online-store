import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import useCart from '../hooks/useCart';
import { Button } from './ui/button';
import { formatPrice } from '../helpers/formatPrice';

function CartSummary() {
  const { cart, totalPrice } = useCartContext();
  const { decrementQuantity, incrementQuantity, removeProduct } = useCart();

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-center" style={ { margin: '20px 0px' } }>Carrinho</h1>
      <div className="w-full max-w-4xl">
        {Object.values(cart).map(({ title, price, id, thumbnail, quantity, available_quantity: inStock }) => (
          <div key={ id } className="flex items-center mb-4 border-b pb-4">
            <img src={ thumbnail } alt={ thumbnail } className="w-20 h-20 object-cover mr-4" />
            <div className="flex-grow">
              <p className="font-medium mb-2">{title}</p>
              <div className="flex justify-between items-center">
                <p className="font-medium">
                  R$
                  {' '}
                  {formatPrice(price)}
                  {' '}
                  (un.)
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="secondary" onClick={ () => decrementQuantity(id) }>-</Button>
                  <p className="font-medium">{quantity}</p>
                  <Button
                    disabled={ quantity === inStock }
                    variant="secondary"
                    onClick={ () => incrementQuantity(id) }
                  >
                    +
                  </Button>
                </div>
                <p className="font-medium">
                  R$
                  {' '}
                  {formatPrice(price * quantity)}
                </p>
              </div>
            </div>
            <Button variant="destructive" onClick={ () => removeProduct(id) } className="ml-4">Remover</Button>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <NavLink to="/">
          <Button variant="secondary">Conferir Mais Produtos</Button>
        </NavLink>
        <div className="flex items-center gap-4">
          <p className="font-bold">
            {`Total: R$ ${formatPrice(totalPrice)}`}
          </p>
          <NavLink to="/checkout">
            <Button variant="gradient">Comprar</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartSummary;
