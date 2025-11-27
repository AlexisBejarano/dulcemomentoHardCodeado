import CardMiddle from '../components/cards/CardMiddle.jsx';

const SectionProductsTop = ({ title, subtitule, data, onProductClick, onAddToCart }) => {
  return (
    <div className="max-w-[1500px] m-auto">
      <h1 className="text-[25px] xl:px-3 px-12  font-['Yeseva_One']">{title}</h1>
      <h2 className="text-[17px] xl:px-3 px-12 font-['Podkova']">- {subtitule}</h2>
      <div className='flex flex-wrap justify-center gap-4 m-auto'>
        {data.map((product) => (
          <div 
            key={product.id} 
            className="cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <CardMiddle 
              data={product} 
              onAddToCart={() => onAddToCart(product)} // ✅ Cambio importante aquí
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProductsTop;