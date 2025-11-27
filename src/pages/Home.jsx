import { useEffect, useState } from 'react';
import StaticDataService from '../services/staticDataService';
import Slider from '../components/Slider.jsx';
import SectionProductsTop from '../components/SectionProductsTop.jsx';
import SectionCategoryButtons from '../components/SectionCategoryButtons.jsx';
import SectionRecipesTop from '../components/SectionRecipesTop.jsx';
import SectionRecipesDown from '../components/SectionRecipesDown.jsx';
import SectionProductsDown from '../components/SectionProductsDown.jsx';
import ProductModal from '../components/ProductModal.jsx';
import RecipeModal from '../components/RecipeModal.jsx';
import { useCartContext } from '../context/CartContext';

const Home = () => {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);

  const { addToCart } = useCartContext();

  //-------------------------------------------- console -----------------------
  useEffect(() => {
    const loadHomeData = async () => {
      try {
        console.log('🚀 Cargando datos estáticos del home...');
        const apiData = await StaticDataService.getHomeData();
        
        // IMPORTANTE: Guardar los datos en el estado
        setData(apiData);
        
        console.group('🏠 DATOS DEL HOME - STATIC RESPONSE');
        console.log('✅ Success:', apiData.success);
        console.log('📊 Secciones recibidas:');
        
        Object.keys(apiData).forEach(key => {
          if (key !== 'success') {
            console.log(`📁 ${key}:`, apiData[key]);
          }
        });
        
        console.groupEnd();
        
      } catch (error) {
        console.error('❌ Error cargando datos estáticos:', error);
      }
    };

    loadHomeData();
  }, []);
  //-------------------------------------------- console -----------------------

  // Funciones para productos
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    console.log(`¡${product.name} agregado al carrito!`);
  };

  // Funciones para recetas
  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };

  const closeRecipeModal = () => {
    setIsRecipeModalOpen(false);
    setSelectedRecipe(null);
  };

  // Función para manejar selección desde el buscador
  const handleSearchProductSelect = (product) => {
    openProductModal(product);
  };

  const handleSearchRecipeSelect = (recipe) => {
    openRecipeModal(recipe);
  };

  return (
    <div>
      <div className="relative">
        <Slider 
          onProductSelect={handleSearchProductSelect}
          onRecipeSelect={handleSearchRecipeSelect}
        />
        <div className="
          absolute 
          md:top-85 
          top-80 
          left-0
          w-full
          h-70
          bg-[url('/images/nubesTop.png')]
          bg-repeat-x
          bg-center
          bg-[length:900px_auto]
          z-0  /* Más bajo que SectionProductsTop */
        "></div>
      </div >
        <div className='m-auto z-10 relative '>
          <SectionProductsTop 
            title="¡Snacks Mejor Valorados!" 
            subtitule="Para Disfrutar En Cualquier Momento." 
            data={data?.sectionTopRatedSnacksProducts?.data || []}
            onProductClick={openProductModal}
            onAddToCart={handleAddToCart}
          />
          <SectionProductsTop 
            title="¡Pasteles Mejor Valorados!" 
            subtitule="Para esos momentos especiales." 
            data={data?.sectionTopRatedPastelProducts?.data || []}
            onProductClick={openProductModal}
            onAddToCart={handleAddToCart}
          />
        </div>
      <div className="
        text-center 
        mt-8
        w-full
        h-10
        bg-[url('/images/linea.png')]
        bg-repeat-x
        bg-center
        bg-[length:1200px_auto]
      "></div>
      <div className='bg-linear-to-b from-white to-[#F0F0F0] w-full'>
        <div className='m-auto'>
          <SectionCategoryButtons 
            category={data?.allCategoryRecipe?.data || []}
          />
          <SectionRecipesTop 
            title="¡Recetas mejor calificadas!" 
            subtitule="¡Lo mejor de lo mejor!" 
            data={data?.sectionTopRatedCakesRecipe?.data || []}
            onRecipeClick={openRecipeModal}
          />
        </div>
      </div>
      <div className="
        m-auto
        text-center 
        w-100
        h-7
        bg-[url('/images/separadorTriangular.png')]
        bg-top
        bg-[length:400px_40px]
        scale-y-[-1]
      "></div>
      <div className='m-auto'>
        <SectionRecipesDown 
          title="¡RECETAS PARA DISGRUTAR EN FAMILIA!" 
          data={data?.sectionTopRatedYieldRecipies?.data || []}
          onRecipeClick={openRecipeModal}
        />
      </div>
      <div className="
        m-auto
        text-center 
        mt-8
        w-100
        h-7
        bg-[url('/images/separadorTriangular.png')]
        bg-button
        bg-[length:400px_40px]
      "></div>
      <div className='bg-[#F0F0F0] w-full'>
        <div className='m-auto'>
          <SectionProductsDown 
            title="¡Porque cada celebración merece un toque especial!" 
            data={data?.sectionTopRatedHighLightProducts?.data || []}
            onProductClick={openProductModal}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      {/* Modales */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={closeProductModal}
        onAddToCart={handleAddToCart}
      />

      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isRecipeModalOpen}
        onClose={closeRecipeModal}
      />
    </div>
  );
};

export default Home;