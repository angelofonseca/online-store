import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProductsFromQuery } from '../services/api';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useProductContext } from '../context/ProductContext';

function SearchBar() {
  const { setProducts, setIsSearched, setIsLoading } = useProductContext();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (window.location.pathname !== '/') navigate('/');
    setIsLoading(true);
    const { results } = await getProductsFromQuery(query);
    setIsLoading(false);
    setProducts(results);
    setIsSearched(true);
  };

  return (
    <div>
      <form onSubmit={ onSubmit }>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <label htmlFor="query-input">
            <Input
              className="text-black w-96"
              type="text"
              id="query-input"
              data-testid="query-input"
              value={ query }
              placeholder="Digite o nome do produto"
              onChange={ ({ target }) => setQuery(target.value) }
            />
          </label>
          <Button variant="secondary" type="submit">
            Pesquisar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
