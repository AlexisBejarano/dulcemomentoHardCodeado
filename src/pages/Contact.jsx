const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Por el momento no hace nada
    console.log('Formulario enviado');
  };

  return (
    <div className="page bg-[#F0F0F0] min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8">
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda - Información de contacto */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold font-['Afacad'] text-gray-900 mb-6">
              Contacto
            </h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold font-['Afacad'] text-amber-600 mb-4">
                ¡Personaliza tu pedido!
              </h3>
              
              <div className="space-y-4 font-['Afacad'] text-gray-700 leading-relaxed">
                <p>
                  Si deseas consultar mayor<br />
                  información sobre nuestros<br />
                  servicios o requiere algun diseño<br />
                  no dudes en solicitar<br />
                  una consultoría gratuita y uno de<br />
                  nuestros asesores te contactará a<br />
                  la brevedad.
                </p>
              </div>
            </div>

            {/* Información de contacto */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.707 12.293a.999.999 0 0 0-1.414 0l-1.594 1.594c-.739-.22-2.118-.72-2.992-1.594s-1.374-2.253-1.594-2.992l1.594-1.594a.999.999 0 0 0 0-1.414l-4-4a.999.999 0 0 0-1.414 0L3.581 5.005c-.38.38-.594.902-.586 1.435.023 1.424.4 6.37 4.298 10.268s8.844 4.274 10.269 4.298h.028c.528 0 1.027-.208 1.405-.586l2.712-2.712a.999.999 0 0 0 0-1.414l-4-4.001z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-['Afacad'] font-semibold text-gray-900">Contáctanos vía Whatsapp</p>
                  <p className="font-['Afacad'] text-gray-700">+52 55 9766 1244</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Afacad'] font-semibold text-gray-900">Correo electrónico</p>
                  <p className="font-['Afacad'] text-gray-700">mesadeayuda@dulcemomento.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-['Afacad'] font-semibold text-gray-900">Dirección</p>
                  <p className="font-['Afacad'] text-gray-700">
                    Guaymas, Sonora. Col. Centro<br />
                    Av. 10
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold font-['Afacad'] text-gray-900 mb-6">
              ¿Quieres saber más?
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Correo y Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm"
                    placeholder="+52 123 456 7890"
                  />
                </div>
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm"
                  placeholder="Nombre de tu empresa (opcional)"
                />
              </div>

              {/* Detalle de consulta */}
              <div>
                <label htmlFor="consulta" className="block text-sm font-medium text-gray-700 font-['Afacad'] mb-2">
                  Detalle de consulta *
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-sm resize-vertical"
                  placeholder="Describe tu consulta o requerimiento..."
                ></textarea>
              </div>

              {/* Botón enviar */}
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 font-['Afacad'] font-semibold text-lg transition-colors"
                >
                  Enviar
                </button>
                <p className="text-xs text-gray-500 font-['Afacad'] mt-2 text-center">
                  * Campos obligatorios
                </p>
              </div>
            </form>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold font-['Afacad'] text-amber-800 mb-2">
              Horarios de atención
            </h3>
            <p className="font-['Afacad'] text-amber-700">
              Lunes a Viernes: 9:00 AM - 6:00 PM • Sábados: 10:00 AM - 2:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;