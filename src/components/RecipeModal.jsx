import { useEffect, useState } from 'react';

const RecipeModal = ({ recipe, isOpen, onClose }) => {
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
        className={`fixed inset-0 backdrop-blur-xs bg-black/20 bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isClosing ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      ></div>

      {/* Modal con animación de escala y translate */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          className={`relative bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ease-out ${
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
              className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 hover:scale-110 active:scale-95"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Contenido del modal */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Sección superior: Imagen + Info básica */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-b">
              {/* Imagen grande */}
              <div className="lg:col-span-2">
                <img
                  src={recipe.imageSrc}
                  alt={recipe.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>

              {/* Información básica */}
              <div className="py-5 space-y-1 text-center">
                <div>
                  <p className="text-lg font-semibold font-['Afacad']">{recipe.autor}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-['Afacad'] text-gray-900">{recipe.name}</h2>
                </div>

                <div>
                  <p className="text-gray-700 font-['Afacad'] leading-relaxed">{recipe.description}</p>
                </div>

                <div>
                  <div className="flex items-center justify-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(recipe.rating) ? 'fill-current' : 'text-gray-300'}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600 font-['Afacad']">{recipe.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección media: Detalles de la receta */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 p-6">
              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico5.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Dificultad</p>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full font-['Afacad']`}>{recipe.difficulty}</span>
              </div>
              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico4.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Tiempo</p>
                </div>
                <p className="font-['Afacad'] font-medium">{recipe.cookingTime} min</p>
              </div>

              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico7.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Categoría</p>
                </div>
                <p className="font-['Afacad'] font-medium">{recipe.category}</p>
              </div>

              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico8.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Estación</p>
                </div>
                <p className="font-['Afacad'] font-medium">{recipe.station}</p>
              </div>

              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico2Categoria.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Porciones</p>
                </div>
                <p className="font-['Afacad'] font-medium">{recipe.yield}</p>
              </div>

              <div>
                <div className='flex'>
                    <img src={`../../public/images/icons/ico9Categoria.png`} className="w-4 h-4.5 mx-0.5 object-cover"/>
                    <p className="text-sm text-gray-600 font-['Afacad']">Método</p>
                </div>
                <p className="font-['Afacad'] font-medium">{recipe.cookingMethod}</p>
              </div>
            </div>

            {/* Sección inferior: Contenido detallado */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Columna izquierda: Contenido de la receta */}
              <div className="lg:col-span-2 space-y-6">
                {/* Mise en Place */}
                {recipe.miseEnPlace && (
                  <div>
                    <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-3">Mise en Place</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 font-['Afacad'] whitespace-pre-line">{recipe.miseEnPlace}</p>
                    </div>
                  </div>
                )}

                {/* Preparación */}
                {recipe.preparation && (
                  <div>
                    <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-3">Preparación</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 font-['Afacad'] whitespace-pre-line">{recipe.preparation}</p>
                    </div>
                  </div>
                )}

                {/* Notas */}
                {recipe.notes && (
                  <div>
                    <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-3">Notas</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 font-['Afacad'] whitespace-pre-line">{recipe.notes}</p>
                    </div>
                  </div>
                )}

                {/* Glosario */}
                {recipe.glossary && (
                  <div>
                    <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-3">Glosario</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 font-['Afacad'] whitespace-pre-line">{recipe.glossary}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Columna derecha: Ingredientes */}
                <div>
                <h3 className="text-lg font-semibold font-['Afacad'] text-gray-900 mb-3">Ingredientes</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                    {recipe.ingredients ? (
                    <ul className="space-y-2">
                        {typeof recipe.ingredients === 'string' ? (
                        // Si ingredients es un string, dividirlo por puntos
                        recipe.ingredients.split('.').map((ingredient, index) => (
                            ingredient.trim() && (
                            <li key={index} className="flex items-start font-['Afacad']">
                                <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span className="text-gray-700">{ingredient.trim()}</span>
                            </li>
                            )
                        ))
                        ) : (
                        // Si ingredients es un array
                        recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className="flex items-start font-['Afacad']">
                            <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{ingredient}</span>
                            </li>
                        ))
                        )}
                    </ul>
                    ) : (
                    <p className="text-gray-500 font-['Afacad'] italic">No hay ingredientes especificados</p>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;