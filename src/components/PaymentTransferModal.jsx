import { useEffect, useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const PaymentTransferModal = ({ isOpen, onClose, cart, total }) => {
  const [orderNumber, setOrderNumber] = useState(null);

  // Generar número de pedido al abrir el modal
  useEffect(() => {
    if (isOpen && !orderNumber) {
      const newOrderNumber = Math.floor(Math.random() * 10000) + 1;
      setOrderNumber(newOrderNumber);
    }
  }, [isOpen, orderNumber]);

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

  const generatePDF = () => {
    const doc = new jsPDF();
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('es-MX', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Estilos personalizados
    doc.setTextColor(253, 224, 71); // Amarillo
    doc.setFontSize(40);
    doc.setFont('helvetica', 'bold');
    doc.text("Dulce Momento", 105, 20, { align: 'center' });
    
    // Subtítulo
    doc.setTextColor(255, 255, 255);
    doc.rect(10, 25, 190, 10, 'F');
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text("Porque la vida sabe mejor cuando compartimos un Dulce Momento", 105, 31, { align: 'center' });

    // Información del pedido
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(`Fecha: ${formattedDate}`, 14, 45);
    doc.text(`N° de Pedido: #${orderNumber}`, 14, 52);

    // Tabla de productos - Asegurando que los precios sean números
    autoTable(doc, {
      startY: 70,
      head: [['Producto', 'Cantidad', 'Precio Unitario', 'Subtotal']],
      body: cart.map(item => [
        item.name,
        item.quantity,
        `$${parseFloat(item.price).toFixed(2)}`, // Convertir a número
        `$${(parseFloat(item.price) * item.quantity).toFixed(2)}` // Convertir a número
      ]),
      theme: 'striped',
      headStyles: {
        fillColor: [253, 224, 71], // Amarillo
        textColor: [0, 0, 0],
        fontSize: 10,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 9,
        cellPadding: 3,
      },
      margin: { left: 14, right: 14 }
    });

    // Total - Asegurando que sea un número
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Total a Pagar: $${parseFloat(total).toFixed(2)}`, 14, finalY);

    // Instrucciones de pago
    const instructionsY = finalY + 15;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text("Instrucciones de Pago:", 14, instructionsY);
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    let yPosition = instructionsY + 7;
    
    const instructions = [
      "1. Realiza una transferencia por el total de tu compra a la siguiente cuenta:",
      "   Cuenta: [1242-2112-1444-2112]",
      "   Titular: [Alexis Bejarano]",
      "",
      "2. En el motivo de pago, escribe tu primer nombre y número de pedido:",
      `   Ejemplo: Cliente #${orderNumber}`,
      "",
      "3. Envía el comprobante de pago por WhatsApp al:",
      "   +52 622 162 1559",
      "",
      "IMPORTANTE: Tu pedido será procesado una vez confirmemos el pago."
    ];

    instructions.forEach(line => {
      if (yPosition > 280) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, 14, yPosition);
      yPosition += 5;
    });

    // Pie de página
    const footerY = Math.min(yPosition + 10, 280);
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("Gracias por tu compra - Dulce Momento © 2024", 105, footerY, { align: 'center' });

    // Guardar el PDF
    doc.save(`DulceMomento_Pedido_#${orderNumber}.pdf`);
  };

  const handleSubmitOrder = () => {
    // Generar el PDF
    generatePDF();
    
    // Aquí puedes agregar lógica adicional como enviar el pedido a tu backend
    console.log('Pedido realizado por transferencia');
    console.log('Número de pedido:', orderNumber);
    
    // Mostrar mensaje de confirmación
    alert(`¡Pedido #${orderNumber} generado! Se ha descargado tu ticket.`);
    
    // Cerrar el modal después de un tiempo
    setTimeout(() => {
      onClose();
    }, 2000);
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
                Pago por transferencia
              </h2>
              {orderNumber && (
                <p className="text-center text-amber-600 font-['Afacad'] font-semibold mt-2">
                  N° de Pedido: #{orderNumber}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
              {/* Columna izquierda - Lista de productos */}
              <div>
                <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-4">
                  Tu Pedido
                </h3>
                
                <div className="space-y-3 max-h-80 overflow-y-auto">
                  {cart.map((item) => {
                    // Convertir precio a número para asegurar que funcione
                    const price = parseFloat(item.price) || 0;
                    return (
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
                          ${(price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Total - Asegurando que sea un número */}
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-['Afacad'] font-semibold text-gray-700">Total a pagar:</span>
                    <span className="font-['Afacad'] font-bold text-amber-600 text-xl">
                      ${parseFloat(total).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Columna derecha - Instrucciones de transferencia */}
              <div>
                <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-4">
                  🧾 Cómo realizar tu pago
                </h3>
                
                <div className="space-y-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <p className="font-['Afacad'] text-gray-700 mb-2">
                      Haz una transferencia por el total de tu compra a nuestra cuenta:
                    </p>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-['Afacad'] font-semibold">💳 Cuenta: [1242-2112-1444-2112]</p>
                      <p className="font-['Afacad'] font-semibold">👤 Titular: [Alexis Bejarano]</p>
                    </div>
                  </div>

                  <div>
                    <p className="font-['Afacad'] text-gray-700 mb-2">
                      En el motivo de pago, escribe:
                    </p>
                    <div className="bg-white rounded p-3 border border-gray-200">
                      <p className="font-['Afacad'] font-semibold">👉 Tu primer nombre y tu número de pedido</p>
                      <p className="font-['Afacad'] text-sm text-gray-600">
                        (Ejemplo: Ana #{orderNumber})
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="font-['Afacad'] text-gray-700">
                      Una vez realizado la transferencia.<br />
                      Envía una captura del pago por WhatsApp al<br />
                      <span className="font-semibold">+52 622 162 1559</span> con tu primer nombre y numero de pedido.
                    </p>
                  </div>
                  {/* Número de pedido destacado */}
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
                    <p className="font-['Afacad'] text-amber-800 font-semibold">
                      Tu número de pedido es:
                    </p>
                    <p className="font-['Afacad'] text-3xl text-amber-600 font-bold mt-2">
                      #{orderNumber}
                    </p>
                    <p className="font-['Afacad'] text-amber-700 text-sm mt-2">
                      Preséntalo en sucursal junto con este ticket
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="font-['Afacad'] font-semibold text-gray-900">
                      Finaliza el pedido 👇👇👇👇
                    </p>
                  </div>
                </div>

                {/* Botón realizar pedido */}
                <button
                  onClick={handleSubmitOrder}
                  className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-['Afacad'] font-semibold mt-6 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Realizar Pedido y Descargar Ticket
                </button>

                {/* Texto informativo */}
                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p className="font-['Afacad'] text-green-800 text-sm text-center">
                    ✅ Se descargará un PDF con tu ticket. Una vez que confirmemos el pago, te avisaremos y prepararemos tu pedido y acordar método de envio por medio de WhatsApp.
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

export default PaymentTransferModal;