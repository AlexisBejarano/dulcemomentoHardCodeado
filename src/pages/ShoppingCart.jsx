import { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import PaymentTransferModal from '../components/PaymentTransferModal';
import PaymentCashModal from '../components/PaymentCashModal';

const ShoppingCart = () => {
  const { 
    cart, 
    removeFromCart, 
    incrementQuantity, 
    decrementQuantity, 
    getTotalItems, 
    getSubtotal,
    clearCart 
  } = useCartContext();

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCashModal, setShowCashModal] = useState(false);

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleTransferPayment = () => {
    setShowTransferModal(true);
  };

  const handleCashPayment = () => {
    setShowCashModal(true);
  };

  const closeTransferModal = () => {
    setShowTransferModal(false);
  };

  const closeCashModal = () => {
    setShowCashModal(false);
  };

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  if (cart.length === 0) {
    return (
      <div className="page bg-[#F0F0F0] min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5.5M7 13l2.5 5.5m0 0L17 21" />
            </svg>
            <h1 className="text-2xl font-bold font-['Afacad'] text-gray-900 mb-4">Tu carrito está vacío</h1>
            <p className="text-gray-600 font-['Afacad'] mb-6">Agrega algunos productos deliciosos a tu carrito</p>
            <a 
              href="/products" 
              className="inline-block px-6 py-3 bg-[#38211A] text-white rounded-lg hover:bg-[#000000] transition-colors font-['Afacad'] font-semibold"
            >
              Ir a Productos
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page bg-[#F0F0F0] min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center my-8">
          <h1 className="text-3xl font-bold font-['Afacad'] text-gray-900 mb-2">Seleccionar Metodo de pago.</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna izquierda - Productos del carrito */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold font-['Afacad'] text-gray-900 mb-4">
                Tus Productos ({getTotalItems()})
              </h2>
              
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                    {/* Imagen */}
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    
                    {/* Información del producto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-['Afacad'] font-semibold text-gray-900 truncate">
                        {item.name}
                      </h3>
                      <p className="font-['Afacad'] text-amber-600 font-bold text-lg">
                        ${item.price}
                      </p>
                    </div>

                    {/* Controles de cantidad */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      
                      <span className="font-['Afacad'] font-semibold w-8 text-center text-lg">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>

                    {/* Subtotal y eliminar */}
                    <div className="text-right">
                      <p className="font-['Afacad'] font-semibold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700 transition-colors text-sm font-['Afacad'] mt-1"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-['Afacad'] font-semibold text-gray-700 text-lg">Total:</span>
                  <span className="font-['Afacad'] font-bold text-amber-600 text-2xl">
                    ${getSubtotal().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Métodos de pago */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-semibold font-['Afacad'] text-gray-900 mb-6">
                Seleccionar método de pago
              </h2>

              <div className="space-y-4">
                {/* Opción Transferencia */}
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPaymentMethod === 'transfer' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                  onClick={() => handlePaymentMethodSelect('transfer')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-['Afacad'] font-semibold text-gray-900">
                      Pago por transferencia
                    </h3>
                    {selectedPaymentMethod === 'transfer' && (
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="font-['Afacad'] text-gray-600 text-sm">
                    Realizar pago por medio de transferencia bancaria.
                  </p>
                </div>

                {/* Opción Efectivo */}
                <div 
                  className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    selectedPaymentMethod === 'cash' 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                  onClick={() => handlePaymentMethodSelect('cash')}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-['Afacad'] font-semibold text-gray-900">
                      Pago por efectivo
                    </h3>
                    {selectedPaymentMethod === 'cash' && (
                      <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="font-['Afacad'] text-gray-600 text-sm">
                    Realizar pago en efectivo presencial en sucursal.
                  </p>
                </div>
              </div>

              {/* Botones de pago */}
              <div className="mt-6 space-y-3">
                {selectedPaymentMethod === 'transfer' && (
                  <button
                    onClick={handleTransferPayment}
                    className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-['Afacad'] font-semibold"
                  >
                    Pagar por Transferencia
                  </button>
                )}

                {selectedPaymentMethod === 'cash' && (
                  <button
                    onClick={handleCashPayment}
                    className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-['Afacad'] font-semibold"
                  >
                    Pagar en Efectivo
                  </button>
                )}

                {!selectedPaymentMethod && (
                  <button
                    disabled
                    className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed font-['Afacad'] font-semibold"
                  >
                    Selecciona un método de pago
                  </button>
                )}
              </div>

              {/* Limpiar carrito */}
              <button
                onClick={clearCart}
                className="w-full px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-['Afacad'] font-medium mt-4"
              >
                Limpiar Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modales de pago */}
      <PaymentTransferModal
        isOpen={showTransferModal}
        onClose={closeTransferModal}
        cart={cart}
        total={getSubtotal()}
      />

      <PaymentCashModal
        isOpen={showCashModal}
        onClose={closeCashModal}
        cart={cart}
        total={getSubtotal()}
      />
    </div>
  );
};

export default ShoppingCart;