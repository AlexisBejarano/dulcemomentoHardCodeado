import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-3 px-4 sm:px-6 lg:px-8 bg-[hsl(0,0%,11%,0.8)] backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-['Cinzel_Decorative']">
          <Link 
            to="/" 
            className="text-yellow-300 text-xl sm:text-2xl lg:text-[25px] hover:text-yellow-200 transition-colors"
          >
            DulcE MOmENtO
          </Link>
        </div>

        {/* Menú desktop */}
        <ul className="hidden lg:flex items-center space-x-8 text-[20px]">
          <li>
            <Link 
              to="/" 
              className="text-white hover:text-yellow-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              className="text-white hover:text-yellow-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Productos
            </Link>
          </li>
          <li>
            <Link 
              to="/recipes" 
              className="text-white hover:text-yellow-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Recetas
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-white hover:text-yellow-300 transition-colors py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>Carrito</span>
              <span>🛒</span>
            </Link>
          </li>
        </ul>

        {/* Botón hamburguesa móvil */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[hsl(0,0%,11%,0.95)] backdrop-blur-md shadow-xl transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="flex flex-col items-center py-6 space-y-4 text-[18px]">
          <li className="w-full text-center">
            <Link 
              to="/" 
              className="block text-white hover:text-yellow-300 transition-colors py-3 px-4 hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/products" 
              className="block text-white hover:text-yellow-300 transition-colors py-3 px-4 hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/recipes" 
              className="block text-white hover:text-yellow-300 transition-colors py-3 px-4 hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Recetas
            </Link>
          </li>
          <li className="w-full text-center">
            <Link 
              to="/contact" 
              className="block text-white hover:text-yellow-300 transition-colors py-3 px-4 hover:bg-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li className="w-full text-center mt-4">
            <Link 
              to="/cart" 
              className="block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition-colors mx-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Carrito</span>
                <span>🛒</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;