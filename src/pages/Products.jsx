import { useState, useEffect } from 'react';
import CardMiddle from '../components/cards/CardMiddle';
import ProductModal from '../components/ProductModal';
import { useCartContext } from '../context/CartContext';
import StaticDataService from '../services/staticDataService';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [lastId, setLastId] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  
  // Estados para el modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Usar el context del carrito
  const { addToCart } = useCartContext();

  // Cargar productos iniciales al montar el componente
  useEffect(() => {
    loadProducts(0, false);
  }, []);

  const loadProducts = async (startId = 0, isLoadMore = false) => {
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }

    try {
      const result = await StaticDataService.getFeaturedProducts(startId);
      
      if (result.success) {
        if (isLoadMore) {
          setProducts(prev => [...prev, ...result.pageProducts.data]);
        } else {
          setProducts(result.pageProducts.data);
        }
        
        setLastId(result.pageProducts.lastId);
        setHasMore(result.pageProducts.hasMore);
      }
    } catch (error) {
      console.error('Error cargando productos:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Cargar más productos
  const handleLoadMore = () => {
    if (!loadingMore && hasMore) {
      loadProducts(lastId, true);
    }
  };

  // Buscar productos
  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setIsSearching(false);
      await loadProducts(0, false);
      return;
    }

    setLoading(true);
    setIsSearching(true);
    
    try {
      const result = await StaticDataService.searchProductsByName({
        searchTerm: searchTerm,
        lastId: 0
      });
      
      if (result.success) {
        setProducts(result.searchResults.data);
        setLastId(result.searchResults.lastId);
        setHasMore(result.searchResults.hasMore);
      } else {
        setProducts([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error buscando productos:', error);
      setProducts([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMoreSearch = async () => {
    if (!loadingMore && hasMore && isSearching) {
      setLoadingMore(true);
      
      try {
        const result = await StaticDataService.searchProductsByName({
          searchTerm: searchTerm,
          lastId: lastId
        });
        
        if (result.success) {
          setProducts(prev => [...prev, ...result.searchResults.data]);
          setLastId(result.searchResults.lastId);
          setHasMore(result.searchResults.hasMore);
        }
      } catch (error) {
        console.error('Error cargando más productos de búsqueda:', error);
      } finally {
        setLoadingMore(false);
      }
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearching(false);
    loadProducts(0, false);
  };

  // Abrir modal con el producto seleccionado
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Manejar agregar al carrito
  const handleAddToCart = (product) => {
    addToCart(product);
    // El mensaje ahora se maneja automáticamente en el CartContext
  };

  return (
    <div className="bg-[#F0F0F0] min-h-screen py-10">
      <div className="2xl:w-[1550px] xl:w-[1232px] mx-auto px-4 sm:px-6 py-15">
        {/* Buscador */}
        <form onSubmit={handleSearch} className="mb-5 flex justify-end">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="w-[300px] h-12 right-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[20px]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 h-12  bg-[#38211A] text-white rounded-lg hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 font-['Afacad'] font-semibold whitespace-nowrap text-[19px]"
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </form>

        {/* Resultados de búsqueda */}
        {isSearching && (
          <div className="text-center mb-6">
            <p className="text-gray-700 font-['Afacad'] text-[17px]">
              {products.length > 0 
                ? `Encontrados ${products.length} resultados para "${searchTerm}"`
                : `No se encontraron resultados para "${searchTerm}"`
              }
            </p>
          </div>
        )}

        {/* Grid de Productos */}
        {loading && products.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block rounded-full h-12 w-12 border-b-2 border-amber-600"></div>
            <p className="mt-4 text-gray-600 font-['Afacad']">Cargando productos...</p>
          </div>
        ) : (
          <>
            <div className="w-full m-auto">
              <div className='
                grid 
                grid-cols-1 
                min-[630px]:grid-cols-2 
                min-[920px]:grid-cols-3 
                min-[1230px]:grid-cols-4
                min-[1600px]:grid-cols-5 
                gap-4 
                sm:gap-6
              '>
                {products.map((product) => (
                  <div 
                    key={product.id} 
                    className="w-full max-w-[280px] mx-auto cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <CardMiddle 
                      data={product} 
                      onAddToCart={() => handleAddToCart(product)} // ✅ Cambio importante aquí
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Loading más productos */}
            {loadingMore && (
              <div className="text-center mt-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
                <p className="mt-2 text-gray-600 font-['Afacad'] text-sm">Cargando más productos...</p>
              </div>
            )}

            {/* Botón cargar más */}
            {hasMore && !loadingMore && products.length > 0 && (
              <div className="text-center mt-8 sm:mt-12">
                <button
                  onClick={isSearching ? handleLoadMoreSearch : handleLoadMore}
                  className="hover:bg-[#B8860B] px-6 sm:px-8 py-3 bg-[#38211A] transition-transform duration-300 hover:scale-[1.02] text-white rounded-lg hover:bg-[#38211A] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 font-['Afacad'] font-semibold text-base sm:text-lg"
                >
                  Cargar más productos
                </button>
                <p className="text-gray-600 mt-2 font-['Afacad'] text-sm sm:text-base">
                  Mostrando {products.length} productos
                </p>
              </div>
            )}

            {/* Mensaje cuando no hay más productos */}
            {!hasMore && products.length > 0 && (
              <div className="text-center mt-8">
                <p className="text-gray-600 font-['Afacad'] text-base sm:text-lg">
                  {isSearching 
                    ? `Se encontraron ${products.length} resultados para "${searchTerm}"`
                    : `¡Has visto todos los productos! (${products.length} productos)`
                  }
                </p>
              </div>
            )}

            {/* Mensaje cuando no hay productos */}
            {!loading && products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 font-['Afacad'] text-base sm:text-lg">
                  No se encontraron productos
                </p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Modal de producto */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeProductModal}
        onAddToCart={() => handleAddToCart(selectedProduct)} // ✅ Cambio aquí también
      />
    </div>
  );
};

export default Products;