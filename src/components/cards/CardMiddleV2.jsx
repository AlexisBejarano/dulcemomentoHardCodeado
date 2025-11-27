const CardMiddleV2 = ({ data, onAddToCart }) => {
    const handleAddToCart = (e) => {
        e.stopPropagation(); // ✅ Esto ahora funciona
        if (onAddToCart) {
            onAddToCart();
        }
    };

    return (
        <div className="w-60 sm:w-64 md:w-70 h-80 sm:h-88 md:h-92 bg-white relative p-2 my-2 shadow-lg/30 rounded-sm cursor-pointer flex flex-col transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-full h-32 sm:h-35 md:h-37 relative flex-shrink-0">
                <img
                    src={`${data.imageSrc}`}
                    className="w-full h-full object-cover"
                    alt={data.name}
                />
                <div 
                    onClick={handleAddToCart}
                    className="hover:border-2 hover:border-black border-2 border-transparent  absolute bottom-0 left-0 right-0 h-10 backdrop-blur-xs bg-black/50 text-white font-['Afacad'] text-[19px] text-center py-1 hover:transition-all duration-300 cursor-pointer hover:bg-[#B8860B] hover:text-gray-900 hover:font-semibold hover:shadow-lg hover:shadow-yellow-600/20"
                >
                    Agregar al carrito
                </div>
            </div>
            <div className="text-black text-[20px] font-['Afacad'] text-[15px] truncate">
                {data.name}
            </div>
            <div className="text-[17px] my-1 font-['Podkova']">
                <p>Categoria: {data.category}</p>
            </div>
            <div className="text-[17px] font-['Podkova'] line-clamp-4">
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default CardMiddleV2;