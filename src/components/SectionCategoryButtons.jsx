import CardCategory from '../components/cards/CardCategory.jsx';
import { useNavigate } from 'react-router-dom';

const SectionCategoryButtons = ({ category }) => {
  const navigate = useNavigate();
  const colors = ['#B3D2BC', '#B98FDA', '#92A2CE', '#B5B075', '#99D5D9', '#E0AAA4', '#D7AAD5', '#BE8C76'];

  const handleCategoryClick = (categoryName) => {
    // Navegar a la página de recetas con el filtro de categoría
    navigate('/recipes', { 
      state: { 
        selectedCategory: categoryName 
      } 
    });
  };

  return (
    <div className="text-center px-4 sm:px-6 lg:px-8">
      {/* Sección de título con adornos */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex justify-center mb-4 sm:mb-6">
          <img
            src="/images/adorno1.png"
            className="w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-cover"
            alt="Adorno decorativo"
          />
        </div>
        
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {/* Adorno izquierdo */}
          <img
            src="/images/sectionRight.png"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover scale-x-[-1] hidden xs:block"
            alt="Adorno lateral izquierdo"
          />
          
          {/* Texto del título */}
          <div className="text-[14px] sm:text-[16px] lg:text-[17px] font-['Podkova'] text-center mx-2 sm:mx-4">
            <p className="h-4 sm:h-5 leading-tight">CATEGORIAS</p>
            <p className="h-4 sm:h-5 leading-tight">RECETAS</p>
          </div>
          
          {/* Adorno derecho */}
          <img
            src="/images/sectionRight.png"
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 object-cover hidden xs:block"
            alt="Adorno lateral derecho"
          />
        </div>
      </div>
      
      {/* Grid de categorías */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 justify-items-center">
          {category.map((categoryItem, index) => (
            <div 
              key={categoryItem.category} 
              onClick={() => handleCategoryClick(categoryItem.category)}
              className="cursor-pointer w-full max-w-[140px] sm:max-w-[160px] lg:max-w-none transform transition-transform duration-300 hover:scale-105"
            >
              <CardCategory 
                category={categoryItem} 
                img={""} 
                color={colors[index % colors.length]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCategoryButtons;