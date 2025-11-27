import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import Footer from './components/footer/Footer';
import CartFloating from './components/CartFloating';
import './App.css'
import { CartProvider } from './context/CartContext';
import Notification from './components/Notification';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
          <Footer />
          <CartFloating />
          <Notification />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;