import PaymentForm from '../components/PaymentForm';
import CartCheckout from '../components/CartCheckout';

export default function Checkout() {
  return (
    <div className="container mx-auto p-4 flex items-center justify-center">
      <div className="w-full pt-5 mt-5 max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CartCheckout />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
}
