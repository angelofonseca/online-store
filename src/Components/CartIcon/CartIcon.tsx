import { FaCircle } from 'react-icons/fa6';
import './CartIcon.css';
import { RiShoppingCartLine } from 'react-icons/ri';
import { useCartContext } from '../../context/CartContext';

function CartIcon() {
  const { cartLength } = useCartContext();
  return (
    <div className="cart-icon">
      <RiShoppingCartLine className="cart" />
      <FaCircle className="circle" />
      <p
        data-testid="shopping-cart-size"
        className="cart-quantity"
      >
        {cartLength}
      </p>
    </div>
  );
}

export default CartIcon;
