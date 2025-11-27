import CardComplete from '../components/cards/CardComplete.jsx';

const SectionRecipesDown = ({ title, data, onRecipeClick }) => {
  return (
    <div className="pt-4 px-4 sm:px-6 lg:px-8">
      <h1 className="text-lg sm:text-xl lg:text-[20px] font-['Yeseva_One'] text-center mb-6 lg:mb-8">
        {title}
      </h1>
      <div className='max-w-[1500px] flex flex-wrap justify-center gap-4 m-auto'>
        {data.map((recipe) => (
          <div 
            key={recipe.id} 
            className="cursor-pointer w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1rem)]"
            onClick={() => onRecipeClick(recipe)}
          >
            <CardComplete 
              data={recipe} 
              onViewMore={(e) => {
                e.stopPropagation();
                onRecipeClick(recipe);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionRecipesDown;