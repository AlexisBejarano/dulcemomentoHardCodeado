import CardMiddleV2 from '../components/cards/CardMiddleV2.jsx';

const SectionProductsDown = ({ title, data, onProductClick, onAddToCart }) => {
  return (
    <div className="py-10 max-w-[1500px] m-auto">
      <h1 className="pb-5 text-[30px] font-['Yeseva_One'] text-center">{title}</h1>
      <div className='flex flex-wrap justify-center gap-4 m-auto'>
        {data.map((product) => (
          <div 
            key={product.id} 
            className="cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <CardMiddleV2 
              data={product} 
              onAddToCart={() => onAddToCart(product)} // ✅ Cambio aquí también
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionProductsDown;