import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Categories from '../Components/Categories';
import ProductCard from '../Components/ProductCard';
import SearchBar from '../Components/SearchBar';
import { Result } from '../Types';

function Home() {
  const [results, setResults] = useState<Result[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  return (
    <main>
      <NavLink data-testid="shopping-cart-button" to="/cart">Carrinho</NavLink>
      <SearchBar setResults={ setResults } setIsSearched={ setIsSearched } />
      <aside>
        <Categories setResults={ setResults } setIsSearched={ setIsSearched } />
      </aside>
      <section>
        {results.length > 0 ? (
          results.map(({ id, title, thumbnail, price }) => (
            <ProductCard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />
          ))
        ) : (
          isSearched && <h2>Nenhum produto foi encontrado</h2>
        )}
      </section>
    </main>
  );
}

export default Home;
