import { useEffect } from 'react';

const PaymentCashModal = ({ isOpen, onClose, cart, total }) => {
  // Cerrar modal con ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadTicket = () => {
    // Por el momento no hace nada
    console.log('Descargar ticket PDF');
    // Aquí iría la lógica para generar el PDF
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Fondo oscuro */}
      <div 
        className="fixed inset-0 backdrop-blur-xs bg-black/20 bg-opacity-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Header con botón cerrar */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={onClose}
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="overflow-y-auto max-h-[90vh]">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold font-['Afacad'] text-gray-900 text-center">
                Pago en sucursal
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Columna izquierda - Lista de productos */}
              <div>
                <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-4">
                  Tu Pedido
                </h3>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-['Afacad'] font-semibold text-sm text-gray-900 truncate">
                          {item.name}
                        </h4>
                        <p className="font-['Afacad'] text-gray-600 text-xs">
                          Cantidad: {item.quantity}
                        </p>
                      </div>
                      <p className="font-['Afacad'] font-semibold text-amber-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-['Afacad'] font-semibold text-gray-700">Total a pagar:</span>
                    <span className="font-['Afacad'] font-bold text-amber-600 text-xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Instrucciones de pago en efectivo */}
              <div>
                <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-4">
                  🧾 Cómo realizar tu pago
                </h3>
                
                <div className="space-y-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <p className="font-['Afacad'] text-gray-700 mb-3">
                      Guarda o imprime tu ticket.<br />
                      Este ticket incluye tu número de pedido y el monto total a pagar.
                    </p>
                  </div>

                  <div>
                    <p className="font-['Afacad'] text-gray-700">
                      Acude a nuestra sucursal y muestra el ticket en caja.<br />
                      Nuestro personal verificará tu pedido y podrás realizar el pago en efectivo directamente en el lugar.
                    </p>
                  </div>

                  {/* Mapa placeholder */}
                  <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                    <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center">
                      <p className="font-['Afacad'] text-gray-500">📍 Mapa de ubicación de sucursal</p>
                    </div>
                    <p className="font-['Afacad'] text-sm text-gray-600 mt-2">
                      Dirección: [Tu dirección aquí]
                    </p>
                  </div>
                </div>

                {/* Botón descargar ticket */}
                <button
                  onClick={handleDownloadTicket}
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-['Afacad'] font-semibold mt-6"
                >
                  Descargar Ticket PDF
                </button>

                {/* Texto informativo */}
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-['Afacad'] text-green-800 text-sm text-center">
                    Una vez confirmado tu pago, prepararemos tu pedido para entrega o recolección según la opción que elegiste, te notificaremos por medio de Whatsapp.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCashModal;