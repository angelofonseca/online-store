import ProductCard from './ProductCard';
import { useProductContext } from '../context/ProductContext';

function ProductsList() {
  const { products, isSearched } = useProductContext();
  if (products.length === 0 && isSearched) {
    return <h2>Nenhum produto foi encontrado</h2>;
  }
  return (
    products.map((product) => (
      <div key={ product.id } className="card hover:bg-gray-100 hover:shadow-lg transition-all duration-300">
        <ProductCard product={ product } isDetailedView={ false } />
      </div>
    ))
  );
}

export default ProductsList;
