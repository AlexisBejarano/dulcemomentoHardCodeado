import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const CartFloating = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    getTotalItems,
    getSubtotal
  } = useCartContext();

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const handleIncrement = (productId, e) => {
    e.stopPropagation();
    incrementQuantity(productId);
  };

  const handleDecrement = (productId, e) => {
    e.stopPropagation();
    decrementQuantity(productId);
  };

  const handleRemove = (productId, e) => {
    e.stopPropagation();
    removeFromCart(productId);
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-amber-600 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 flex items-center justify-center group"
      >
        <div className="relative">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
          </svg>
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {getTotalItems()}
            </span>
          )}
        </div>
      </button>

      {/* Panel del carrito */}
      {isOpen && (
        <>
          {/* Fondo oscuro */}
          <div 
            className="fixed inset-0 bg-opacity-50 z-30"
            onClick={toggleCart}
          ></div>
          
          {/* Panel del carrito */}
          <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[90vw] bg-white rounded-lg shadow-xl max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="p-4 border-b bg-amber-600 text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <h3 className="font-['Afacad'] font-semibold text-lg">
                  Tu Carrito ({getTotalItems()})
                </h3>
                <button
                  onClick={toggleCart}
                  className="text-white hover:text-amber-200 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Lista de productos */}
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
                  </svg>
                  <p className="text-gray-500 font-['Afacad']">Tu carrito está vacío</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                      {/* Imagen */}
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      
                      {/* Información del producto */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Afacad'] font-semibold text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="font-['Afacad'] text-amber-600 font-bold">
                          ${item.price}
                        </p>
                      </div>

                      {/* Controles de cantidad */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={(e) => handleDecrement(item.id, e)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        
                        <span className="font-['Afacad'] font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={(e) => handleIncrement(item.id, e)}
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Botón eliminar */}
                      <button
                        onClick={(e) => handleRemove(item.id, e)}
                        className="text-red-500 hover:text-red-700 transition-colors p-1"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer con total y botón de pago */}
            {cart.length > 0 && (
              <div className="border-t p-4 bg-gray-50 rounded-b-lg">
                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <span className="font-['Afacad'] font-semibold text-gray-700">Subtotal:</span>
                  <span className="font-['Afacad'] font-bold text-amber-600 text-lg">
                    ${getSubtotal().toFixed(2)}
                  </span>
                </div>

                {/* Botón ir a pagar */}
                <Link
                  to="/cart"
                  onClick={toggleCart}
                  className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-['Afacad'] font-semibold text-center block"
                >
                  Ir a Pagar
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default CartFloating;