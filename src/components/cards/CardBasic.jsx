const CardBasic = ({ data }) => {
    return (
        <div className="w-60 sm:w-64 md:w-70 bg-white relative p-2 my-2 shadow-lg/30 rounded-sm cursor-pointer flex flex-col transition-transform duration-300 hover:scale-[1.02]">
            <div className="w-full h-32 sm:h-35 md:h-37 relative flex-shrink-0">
                <img
                    src={`../../public${data.imageSrc}`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute h-7 sm:h-8 bottom-0 left-0 text-left right-0 text-white backdrop-blur-xs bg-black/50 uppercase font-['Ranga'] px-1 text-lg sm:text-xl md:text-[24px] truncate">
                    {data.name}
                </div>
            </div>

            <div className="mt-1 flex pb-1 text-xs sm:text-[14px] font-medium justify-between font-['Afacad'] flex-shrink-0">
                <div className="flex items-center">
                    <div
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 bg-cover mx-0.5 bg-[url('../../public/images/icons/ico1.png')]"
                    />
                    <p className="font-['Podkova']">{data.category}</p>
                </div>
                <div className="flex truncate">
                    <div
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 bg-cover mx-0.5 bg-[url('../../public/images/icons/ico4.png')]"
                    />
                    <p className="pt-0.5 font-['Podkova']">{data.cookingTime}</p>
                </div>
                <div className="flex">
                    <div
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 bg-cover mx-0.5 bg-[url('../../public/images/icons/ico5.png')]"
                    />
                    <p className="pt-0.5 font-['Podkova']">{data.difficulty}</p>
                </div>
            </div>
        </div>
    );
};

export default CardBasic;