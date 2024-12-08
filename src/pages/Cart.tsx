import { useCartContext } from '../context/CartContext';
import CartSummary from '../components/CartSummary';

function Cart() {
  const { cartLength } = useCartContext();

  if (!cartLength) {
    return <h2 className="absolute inset-0 flex justify-center items-center">Seu carrinho está vazio</h2>;
  }

  return (
    <div className="container mx-auto flex justify-center">
      <CartSummary />
    </div>
  );
}

export default Cart;
