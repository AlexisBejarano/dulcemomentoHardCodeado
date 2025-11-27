const CardComplete = ({ data, onViewMore }) => {
    const ingredientsList = data.ingredients 
    ? data.ingredients.split('.').filter(item => item.trim() !== '')
    : [];

    const handleViewMore = (e) => {
        e.stopPropagation();
        if (onViewMore) {
            onViewMore(data);
        }
    };

    return (
        <div className="w-full bg-white p-3 sm:p-4 m-1 sm:m-2 shadow-lg/30 rounded-sm cursor-pointer flex flex-col h-auto min-h-80 sm:min-h-96 transition-transform duration-300 hover:scale-[1.02]">
            {/* Header con nombre e imagen */}
            <div className="w-full relative flex-shrink-0">
                <div className="text-black text-left uppercase font-['Ranga'] px-1 text-[25px] truncate mb-1">
                    {data.name}
                </div>
                <img
                    src={`../../public${data.imageSrc}`}
                    className="w-full h-24 sm:h-28 md:h-30 object-cover bg-white rounded"
                    alt={data.name}
                />
            </div>

            {/* Descripción */}
            <div className="text-[17px] mt-1 sm:mt-2 font-['Podkova'] flex-shrink-0">
                <p className="line-clamp-2 sm:line-clamp-3">{data.description}</p>
            </div>

            {/* Contenido principal - Ocupa el espacio disponible */}
            <div className="flex flex-col sm:flex-row py-3 sm:py-4 flex-1 min-h-0 gap-3 sm:gap-0">
                {/* Columna izquierda - Información */}
                <div className="border-b-2 sm:border-b-0 sm:border-r-2 border-stone-400 pb-3 sm:pb-0 flex-shrink-0">
                    <div className="mx-1 sm:mx-2 mb-2 sm:mb-3">
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico4.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">PREPARACION</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.cookingTime}</p>
                    </div>
                    <div className='mx-1 sm:mx-2 mb-2 sm:mb-3'>
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico5.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">DIFICULTAD</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.difficulty}</p>
                    </div>
                    <div className='mx-1 sm:mx-2 mb-2 sm:mb-3'>
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico6.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">AUTOR</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.autor}</p>
                    </div>
                    <div className='mx-1 sm:mx-2 mb-2 sm:mb-3'>
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico7.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">RENDIMIENTO</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.yield}</p>
                    </div>
                    <div className='mx-1 sm:mx-2 mb-2 sm:mb-3'>
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico8.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">ESTACION</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.station}</p>
                    </div>
                    <div className='mx-1 sm:mx-2'>
                        <div className='flex items-center'>
                            <img src={`../../public/images/icons/ico9.png`} className="w-3 h-3 sm:w-4 sm:h-4.5 mx-0.5 object-cover"/>
                            <h2 className="text-[17px] font-['Podkova']">METODO COCCION</h2>
                        </div>
                        <p className="text-[17px] font-['Podkova']">{data.cookingMethod}</p>
                    </div>
                </div>
                
                {/* Columna derecha - Ingredientes */}
                <div className="pl-0 sm:pl-4 flex-1 overflow-hidden">
                    <p className="text-[17px] mb-2 font-['Podkova'] font-semibold">INGREDIENTES:</p>
                    
                    <ul className="text-[17px] space-y-1 max-h-32 sm:max-h-80 overflow-y-auto">
                        {ingredientsList.map((ingredient, index) => (
                        <li key={index} className="flex items-start font-['Podkova']">
                            <span className="mr-1 flex-shrink-0">•</span>
                            <span className="break-words flex-1">{ingredient.trim()}</span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Glosario */}
            <div className="text-[17px] h-12 mt-2 sm:mt-3 font-['Podkova'] flex-shrink-0">
                <p className="line-clamp-2">{data.glossary}</p>
            </div>

            {/* Botón siempre abajo */}
            <div className="flex-shrink-0 mt-3 sm:mt-4">
                <div
                    className="hover:border-2 hover:border-black border-2 border-transparent w-full max-w-36 h-9 sm:h-9 rounded-sm bg-[#38211A] text-white font-['Afacad'] text-[17px] block mx-auto text-center py-1 transition-all duration-300 hover:bg-[#B8860B] hover:text-gray-900 hover:shadow-lg hover:shadow-yellow-600/20"
                >
                    Ver más
                </div>
            </div>
        </div>
    );
};

export default CardComplete;