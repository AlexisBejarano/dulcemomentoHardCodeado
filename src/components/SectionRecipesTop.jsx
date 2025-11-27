import CardBasic from './cards/CardBasic.jsx';

const SectionRecipesTop = ({ title, subtitule, data, onRecipeClick }) => {
  // Tomar el primer elemento para la card grande
  const featuredRecipe = data[0];
  // El resto para las cards pequeñas (10 elementos)
  const otherRecipes = data.slice(1, 11);

  const handleFeaturedRecipeClick = () => {
    if (featuredRecipe && onRecipeClick) {
      onRecipeClick(featuredRecipe);
    }
  };

  return (
    <div className="py-7 text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-xl sm:text-2xl lg:text-[30px] font-['Yeseva_One']">{title}</h1>
      <h2 className="text-gray-600 text-base sm:text-lg lg:text-[20px] font-['Podkova'] mt-2">{subtitule}</h2>
      <div className="w-full justify-center text-center m-auto">
        <img
          src={`../../public/images/section.png`}
          className="w-60 sm:w-70 lg:w-90 h-full m-auto object-cover"
          alt="Section decoration"
        />     
      </div>
      
      {featuredRecipe && (
<div className="max-w-[1400px] w-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-4 cursor-pointer mt-8 mb-2 mx-auto" onClick={handleFeaturedRecipeClick}>          {/* Contenido de texto */}
          <div className="w-full lg:w-[60%] xl:w-[950px] border-b-2 lg:border-b-0 lg:border-r-2 border-stone-400 pb-6 lg:pb-0 lg:pr-4">
            <h1 className="text-lg sm:text-xl lg:text-[25px] font-['Ranga'] uppercase mb-4">
              {featuredRecipe.name}
            </h1>
            <p className="text-sm sm:text-base lg:text-[17px] w-full max-w-2xl m-auto font-['Podkova'] leading-relaxed">
              {featuredRecipe.description} {featuredRecipe.glossary}
            </p>
            
            {/* Información de la receta - Grid responsivo */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 mx-auto">
              <div className="text-center">
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico4.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Tiempo preparación"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">PREPARACION</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.cookingTime}</p>
              </div>
              
              <div className='text-center'>
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico5.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Dificultad"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">DIFICULTAD</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.difficulty}</p>
              </div>
              
              <div className='text-center'>
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico6.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Autor"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">AUTOR</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.autor}</p>
              </div>
              
              <div className='text-center'>
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico7.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Rendimiento"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">RENDIMIENTO</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.yield}</p>
              </div>
              
              <div className='text-center'>
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico8.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Estación"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">ESTACION</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.station}</p>
              </div>
              
              <div className='text-center'>
                <div className='flex justify-center items-center mb-1'>
                  <img src={`../../public/images/icons/ico9.png`} className="w-4 h-4.5 mx-1 object-cover" alt="Método cocción"/>
                  <h2 className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">METODO COCCION</h2>
                </div>
                <p className="text-xs sm:text-sm lg:text-[15px] font-['Podkova']">{featuredRecipe.cookingMethod}</p>
              </div>
            </div>
            
            <button 
              className="border-2 hover:border-black w-40 sm:w-45 h-10 bg-[#38211A] text-white font-['Afacad'] text-[17px] hover:bg-[#B8860B] transition-all duration-300 mt-6 lg:mt-8 rounded-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleFeaturedRecipeClick();
              }}
            >
              Conocer receta
            </button>
          </div>
          
          {/* Imagen */}
          <div className="w-full lg:w-[40%] flex justify-center">
            <img
              src={`../../public${featuredRecipe.imageSrc}`}
              className="w-full lg:max-w-none lg:w-110 xl:w-150 h-[270px] object-cover rounded-lg shadow-lg"
              alt={featuredRecipe.name}
            />
          </div>
        </div>
      )}

      {/* Grid de cards pequeñas - CORREGIDO */}
      <div className="max-w-[1500px] flex flex-wrap justify-center gap-4 m-auto">
        {otherRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="cursor-pointer" // QUITÉ el w-[280px] fijo
            onClick={() => onRecipeClick(recipe)}
          >
            <CardBasic data={recipe} size="small" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionRecipesTop;