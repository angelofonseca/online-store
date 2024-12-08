import { NavLink, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon/CartIcon';
import logo from '../AM.png';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-to-r from-[#0B62FF] to-[#2D8CFF] text-white shadow-md p-4 sticky top-0 z-20">
      <nav className="container mx-auto flex justify-between items-center">
        <img className="logo cursor-pointer" src={ logo } alt="logo" onClick={ () => navigate('/') } />
        <SearchBar />
        <div className="flex items-center space-x-4">
          <NavLink
            data-testid="shopping-cart-button"
            to="/cart"
            className="hover:text-gray-200 transition-colors duration-300"
          >
            <CartIcon />
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
