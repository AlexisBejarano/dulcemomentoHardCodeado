const CardMiddle = ({ data, onAddToCart }) => {
    const handleAddToCart = (e) => {
        e.stopPropagation(); // ✅ Esto ahora funciona porque recibimos el evento
        if (onAddToCart) {
            onAddToCart();
        }
    };

    return (
        <div className="w-60 sm:w-64 md:w-70 h-80 sm:h-88 md:h-92 bg-white relative p-2 my-2 shadow-lg/30 rounded-sm cursor-pointer flex flex-col transition-transform duration-300 hover:scale-[1.02]">
            {/* Imagen con nombre */}
            <div className="w-full h-32 sm:h-35 md:h-37 relative flex-shrink-0">
                <img
                    src={`../../public${data.imageSrc}`}
                    className="w-full h-full object-cover"
                    alt={data.name}
                />
                <div className="absolute h-7 sm:h-8 bottom-0 left-0 text-left right-0 text-white backdrop-blur-xs bg-black/50 uppercase font-['Ranga'] px-1 text-[5px] sm:text-xl md:text-[24px] truncate">
                    {data.name}
                </div>
            </div>

            {/* Información de iconos */}
            <div className="mt-1 flex border-b pb-1 border-black/10 text-xs sm:text-[14px] font-medium justify-between font-['Afacad'] flex-shrink-0">
                <div className="flex items-center">
                    <div
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 bg-cover mx-0.5 bg-[url('../../public/images/icons/ico3.png')]"
                    />
                    <p className="pt-0.5 sm:pt-1">{data.yield} pz</p>
                </div>
                <div className="flex items-center">
                    <div
                        className="w-4 h-4 sm:w-6 sm:h-6 bg-cover mx-0.5 bg-[url('../../public/images/icons/ico2.png')]"
                    />
                    <p className="pt-0.5 sm:pt-1">{data.category}</p>
                </div>
                <div className="flex items-center">
                    <div
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 bg-cover mx-0.5 bg-[url('../../public/images/icons/icoPrice.png')]"
                    />
                    <p className="pt-0.5 sm:pt-1">${data.price}MXN</p>
                </div>
            </div>

            {/* Descripción - Ocupa el espacio disponible */}
            <div className="mt-1 font-['Afacad'] text-sm sm:text-base md:text-[17px] flex-1 min-h-0 overflow-hidden">
                <p className="line-clamp-3 sm:line-clamp-4">{data.description}</p>
            </div>

            {/* Botón siempre abajo */}
            <div className="flex-shrink-0 my-2">
                <button 
                    onClick={handleAddToCart}
                    className="hover:border-2 hover:border-black border-2 border-transparent w-40 sm:w-44 md:w-46 h-9 sm:h-10 md:h-11 rounded-sm bg-[#38211A] text-white font-['Afacad'] text-sm sm:text-base md:text-[17px] font-medium block mx-auto text-center py-1 sm:py-2 transition-all duration-300 hover:bg-[#B8860B] hover:text-gray-900 hover:font-semibold hover:shadow-lg hover:shadow-yellow-600/20"
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default CardMiddle;