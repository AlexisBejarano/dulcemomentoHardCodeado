import Search from './Search.jsx';

const Slider = ({ onProductSelect, onRecipeSelect }) => {
  return (
    <div className="
      text-center 
      pt-35
      pb-45
      bg-[url('/images/imgTop.png')]
      bg-cover 
      bg-center
    ">
      <h1 className="md:text-[50px] text-[30px] font-['Cinzel_Decorative'] text-yellow-300">DulcE MOmENtO</h1>
      <h2 className="md:text-[30px] text-[18px] px-4 top-[-15px] relative font-['Afacad'] text-white">
        Porque la vida sabe mejor cuando compartimos un Dulce Momento
      </h2>
      <Search 
        onProductSelect={onProductSelect}
        onRecipeSelect={onRecipeSelect}
      />
    </div>
  );
};

export default Slider;