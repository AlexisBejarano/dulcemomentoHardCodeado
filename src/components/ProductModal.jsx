import { useEffect, useState } from 'react';

const ProductModal = ({ product, isOpen, onClose, onAddToCart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Controlar animación de apertura y scroll
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setIsClosing(false);
      // Prevenir scroll de manera más suave
      document.documentElement.style.overflow = 'hidden';
    } else {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        document.documentElement.style.overflow = '';
      }, 300);
      return () => clearTimeout(timer);
    }

    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleClose = () => {
    setIsClosing(true);
    const timer = setTimeout(() => {
      onClose();
      setIsVisible(false);
    }, 300);
    return () => clearTimeout(timer);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
      // Opcional: agregar un pequeño feedback visual al agregar al carrito
      const button = document.querySelector('.add-to-cart-button');
      if (button) {
        button.classList.add('animate-pulse');
        setTimeout(() => {
          button.classList.remove('animate-pulse');
        }, 300);
      }
    }
  };

  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      {/* Fondo oscuro con animación */}
      <div 
        className={`fixed inset-0 backdrop-blur-xs bg-black/20 transition-opacity duration-300 ease-in-out ${
          isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      ></div>

      {/* Modal con animación de escala y translate */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ease-out ${
            isClosing 
              ? 'opacity-0 translate-y-4 scale-95' 
              : 'opacity-100 translate-y-0 scale-100'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con botón cerrar */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleClose}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Columna izquierda - Imagen */}
              <div className="flex flex-col">
                <div className="flex-1">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="w-full h-64 lg:h-80 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                  />
                </div>
                
                {/* Botón agregar al carrito - Versión móvil */}
                <div className="lg:hidden mt-6">
                  <button
                    onClick={handleAddToCart}
                    className="add-to-cart-button w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 font-['Afacad'] font-semibold text-lg transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Agregar al Carrito - ${product.price}
                  </button>
                </div>
              </div>

              {/* Columna derecha - Información del producto */}
              <div className="space-y-6">
                {/* Nombre y Rating */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-['Afacad'] text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex text-amber-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600 font-['Afacad'] text-sm">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold font-['Afacad'] text-amber-600">
                      ${product.price}
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <div>
                  <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-2">
                    Descripción
                  </h3>
                  <p className="text-gray-700 font-['Afacad'] leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Detalles del producto */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 transition-colors duration-200 hover:bg-gray-100">
                    <p className="text-sm text-gray-600 font-['Afacad'] mb-1">Porciones</p>
                    <p className="font-['Afacad'] font-semibold text-gray-900">{product.yield}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 transition-colors duration-200 hover:bg-gray-100">
                    <p className="text-sm text-gray-600 font-['Afacad'] mb-1">Estación</p>
                    <p className="font-['Afacad'] font-semibold text-gray-900">{product.station}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 transition-colors duration-200 hover:bg-gray-100">
                    <p className="text-sm text-gray-600 font-['Afacad'] mb-1">Categoría</p>
                    <p className="font-['Afacad'] font-semibold text-gray-900">{product.category}</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 transition-colors duration-200 hover:bg-gray-100">
                    <p className="text-sm text-gray-600 font-['Afacad'] mb-1">Disponibilidad</p>
                    <p className="font-['Afacad'] font-semibold text-green-600">En Stock</p>
                  </div>
                </div>

                {/* Botón agregar al carrito - Versión desktop */}
                <div className="hidden lg:block pt-4">
                  <button
                    onClick={handleAddToCart}
                    className="add-to-cart-button w-full px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 font-['Afacad'] font-semibold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Agregar al Carrito - ${product.price}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;