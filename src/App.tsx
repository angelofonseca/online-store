import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/product/*" element={ <Product /> } />
      <Route path="/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
