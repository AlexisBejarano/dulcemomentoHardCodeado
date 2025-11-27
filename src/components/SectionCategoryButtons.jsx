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
    <div className="text-center">
      <div className="w-100 justify-center text-center m-auto">
        <img
          src={`/images/adorno1.png`}
          className="w-40 h-full m-auto object-cover"
        />
        <div className='flex justify-center'>
          <img
            src={`/images/sectionRight.png`}
            className="w-40 m-auto object-cover scale-x-[-1]"
          />
            <div className="text-[17px] font-['Podkova']">
              <p className='h-5'>CATEGORIAS</p>
              <p className='h-5'>RECETAS</p>
            </div>
          <img
            src={`/images/sectionRight.png`}
            className="w-40 m-auto object-cover"
          />
        </div>
      </div>
      
      <div className='flex w-full justify-center'>
        {category.map((categoryItem, index) => (
          <div 
            key={categoryItem.category} 
            onClick={() => handleCategoryClick(categoryItem.category)}
            className="cursor-pointer"
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
  );
};

export default SectionCategoryButtons;