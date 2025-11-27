const CardCategory = ({ category, img, color }) => {
    return (
        <button 
            className="w-30 h-8 flex items-center font-['Afacad'] text-[12px] justify-between mx-1 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:brightness-95"
            style={{ backgroundColor: color }}
        >
            <div className="w-[.5px] h-4 mx-1.5 bg-white rounded-full"></div>

            <span className="text-[17px] text-gray-900 ml-auto">
                {category.category}
            </span>
            <span className="bg-white ml-auto">
                {img}
            </span>
            <div className="w-[.5px] h-4 mx-1.5 rounded-full bg-white" ></div>
        </button>    
    );
};

export default CardCategory;