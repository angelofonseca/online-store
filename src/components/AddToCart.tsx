import React from 'react';
import { AddToCartProps } from '../Types';
import { Button } from './ui/button';
import useCart from '../hooks/useCart';

function AddToCart({ product }: AddToCartProps) {
  const { addToCart } = useCart();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    addToCart(product);
  };

  return (
    <Button
      variant="gradient"
      onClick={ handleClick }
      className="buttonCart w-full"
    >
      <h3>Adicionar ao carrinho</h3>
    </Button>
  );
}

export default AddToCart;
