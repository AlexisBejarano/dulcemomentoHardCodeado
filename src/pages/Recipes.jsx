import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RecipeModal from '../components/RecipeModal';
import StaticDataService from '../services/staticDataService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastId, setLastId] = useState(null); // Cambiado a null
  const [hasMore, setHasMore] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  
  // Estados para el modal
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener el estado de navegación
  const location = useLocation();

  // Filtros de búsqueda - INICIALIZAR CON CATEGORÍA SI VIENE DEL HOME
  const [filters, setFilters] = useState({
    searchTerm: '',
    cookingTime: '',
    ingredient: '',
    category: location.state?.selectedCategory || '',
    region: '',
    difficulty: ''
  });

  // Efecto para cargar recetas al montar el componente
  useEffect(() => {
    if (location.state?.selectedCategory) {
      // Si viene una categoría seleccionada, hacer búsqueda automática
      handleAutoSearch(location.state.selectedCategory);
      
      // Limpiar el estado de navegación para evitar repeticiones
      window.history.replaceState({}, document.title);
    } else {
      // Cargar recetas normales si no hay categoría seleccionada
      loadRecipes(null, false); // Cambiado a null
    }
  }, []);

  // Función para búsqueda automática por categoría
  const handleAutoSearch = async (category) => {
    setLoading(true);
    setIsSearching(true);
    
    try {
      const result = await StaticDataService.searchRecipes({
        ...filters,
        category: category,
        lastId: null // Cambiado a null
      });
      
      if (result.success) {
        setRecipes(result.searchResults.data);
        setLastId(result.searchResults.lastId);
        setHasMore(result.searchResults.hasMore);
      } else {
        setRecipes([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error buscando recetas:', error);
      setRecipes([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Función principal para cargar recetas
  const loadRecipes = async (startId = null, isLoadMore = false) => { // Cambiado a null por defecto
    if (isLoadMore) {
      setLoadingMore(true);
    } else {
      setLoading(true);
    }

    try {
      const result = await StaticDataService.getFeaturedRecipes(startId);
      
      if (result.success) {
        if (isLoadMore) {
          setRecipes(prev => [...prev, ...result.pageRecipes.data]);
        } else {
          setRecipes(result.pageRecipes.data);
        }
        
        // Asegurarse de que lastId se actualiza correctamente
        const newLastId = result.pageRecipes.lastId;
        setLastId(newLastId);
        setHasMore(result.pageRecipes.hasMore);
        
        console.log('Cargando recetas:', {
          startId,
          isLoadMore,
          newLastId,
          hasMore: result.pageRecipes.hasMore,
          recipesCount: result.pageRecipes.data.length
        });
      }
    } catch (error) {
      console.error('Error cargando recetas:', error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Cargar más recetas
  const handleLoadMore = () => {
    if (!loadingMore && hasMore && lastId !== null) { // Agregada validación
      console.log('Cargando más recetas. lastId:', lastId);
      if (isSearching) {
        handleSearchLoadMore();
      } else {
        loadRecipes(lastId, true);
      }
    } else {
      console.log('No se puede cargar más:', {
        loadingMore,
        hasMore,
        lastId
      });
    }
  };

  // Manejar cambio en filtros
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Buscar recetas con filtros
  const handleSearch = async (e) => {
    e.preventDefault();
    
    // Si todos los filtros están vacíos, cargar recetas normales
    if (Object.values(filters).every(filter => !filter.trim())) {
      setIsSearching(false);
      await loadRecipes(null, false); // Cambiado a null
      return;
    }

    setLoading(true);
    setIsSearching(true);
    
    try {
      const result = await StaticDataService.searchRecipes({
        ...filters,
        lastId: null // Siempre empezar desde el inicio en nuevas búsquedas
      });
      
      if (result.success) {
        setRecipes(result.searchResults.data);
        setLastId(result.searchResults.lastId);
        setHasMore(result.searchResults.hasMore);
      } else {
        setRecipes([]);
        setHasMore(false);
        setLastId(null);
      }
    } catch (error) {
      console.error('Error buscando recetas:', error);
      setRecipes([]);
      setHasMore(false);
      setLastId(null);
    } finally {
      setLoading(false);
    }
  };

  // Cargar más recetas en búsqueda
  const handleSearchLoadMore = async () => {
    if (!loadingMore && hasMore && isSearching && lastId !== null) {
      setLoadingMore(true);
      
      try {
        const result = await StaticDataService.searchRecipes({
          ...filters,
          lastId: lastId
        });
        
        if (result.success) {
          setRecipes(prev => [...prev, ...result.searchResults.data]);
          setLastId(result.searchResults.lastId);
          setHasMore(result.searchResults.hasMore);
        }
      } catch (error) {
        console.error('Error cargando más recetas:', error);
      } finally {
        setLoadingMore(false);
      }
    }
  };

  // Limpiar filtros
  const clearFilters = () => {
    setFilters({
      searchTerm: '',
      cookingTime: '',
      ingredient: '',
      category: '',
      region: '',
      difficulty: ''
    });
    setIsSearching(false);
    setLastId(null); // Reiniciar lastId
    loadRecipes(null, false); // Cambiado a null
  };

  // Resto del código permanece igual...
  // Abrir modal con la receta seleccionada
  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  // Cerrar modal
  const closeRecipeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  // Verificar si hay filtros activos
  const hasActiveFilters = Object.values(filters).some(filter => filter.trim() !== '');

  // Componente de estrellas de rating
  const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div className="flex items-center space-x-1 pr-4">
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="
      page 
      bg-[url('../../public/images/imgTop.png')]
      bg-cover 
      bg-center 
      min-h-screen
      pt-8">
      
      {/* Filtros de Búsqueda */}
      <div className='backdrop-blur-xs bg-white/50'>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col xl:flex-row gap-8"> 
          
          {/* Filtros - Columna Izquierda */}
          <div className="xl:w-80 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-16">
              <h3 className="text-[25px] font-semibold text-gray-800 mb-4 font-['Afacad']">
                Filtros de Búsqueda
              </h3>
              
              <form onSubmit={handleSearch}>
                <div className="space-y-4">
                  {/* Búsqueda por texto */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Buscar recetas
                    </label>
                    <input
                      type="text"
                      value={filters.searchTerm}
                      onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
                      placeholder="Nombre, descripción o autor..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    />
                  </div>

                  {/* Tiempo de preparación */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Tiempo de preparación
                    </label>
                    <select
                      value={filters.cookingTime}
                      onChange={(e) => handleFilterChange('cookingTime', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    >
                      <option value="">Todos</option>
                      <option value="15">≤ 15 minutos</option>
                      <option value="25">16-25 minutos</option>
                      <option value="35">26-35 minutos</option>
                      <option value="45+">Más de 35 minutos</option>
                    </select>
                  </div>

                  {/* Ingrediente */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Ingrediente
                    </label>
                    <input
                      type="text"
                      value={filters.ingredient}
                      onChange={(e) => handleFilterChange('ingredient', e.target.value)}
                      placeholder="Buscar por ingrediente..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    />
                  </div>

                  {/* Categoría */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Categoría
                    </label>
                    <input
                      type="text"
                      value={filters.category}
                      onChange={(e) => handleFilterChange('category', e.target.value)}
                      placeholder="Ej: postres, ensaladas..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    />
                  </div>

                  {/* Región */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Región
                    </label>
                    <input
                      type="text"
                      value={filters.region}
                      onChange={(e) => handleFilterChange('region', e.target.value)}
                      placeholder="Ej: italiana, mexicana..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    />
                  </div>

                  {/* Dificultad */}
                  <div>
                    <label className="block text-[17px] font-medium text-gray-700 mb-1 font-['Afacad']">
                      Dificultad
                    </label>
                    <select
                      value={filters.difficulty}
                      onChange={(e) => handleFilterChange('difficulty', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] text-[17px]"
                    >
                      <option value="">Todas</option>
                      <option value="Easy">Fácil</option>
                      <option value="Medium">Media</option>
                      <option value="Hard">Difícil</option>
                    </select>
                  </div>
                </div>

                {/* Botones */}
                <div className="flex flex-col gap-3 mt-6">
                  {hasActiveFilters && (
                    <button
                      type="button"
                      onClick={clearFilters}
                      className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent font-['Afacad'] font-medium text-[17px]"
                    >
                      Limpiar filtros
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-2 bg-[#38211A] text-white rounded-md hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent disabled:opacity-50 font-['Afacad'] font-semibold text-[17px] transition-all duration-300 hover:scale-105 hover:brightness-95"
                  >
                    {loading ? 'Buscando...' : 'Buscar recetas'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Tabla - Columna Derecha */}
          <div className="relative min-w-0 top-[-5px]">
            {/* Información de resultados */}
            {isSearching && (
              <div className="bg-amber-50 border border-amber-200 p-4 mb-6">
                <p className="text-amber-800 font-['Afacad'] text-[17px] sm:text-base">
                  {recipes.length > 0 
                    ? `Encontradas ${recipes.length} recetas con los filtros aplicados`
                    : 'No se encontraron recetas con los filtros especificados'
                  }
                </p>
              </div>
            )}

            {/* Tabla de recetas */}
            {loading && recipes.length === 0 ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin h-12 w-12 border-b-2 border-amber-600"></div>
                <p className="mt-4 text-gray-600 font-['Afacad']">Cargando recetas...</p>
              </div>
            ) : (
              <>
                <div className="shadow-sm overflow-hidden">
                  {/* Vista Desktop - Tabla completa */}
                  <div className="hidden xl:block">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[800px] border-separate border-spacing-y-1.5">
                        <thead className="">
                          <tr>
                            <th className="rounded-l-lg pr-4 py-3 text-left text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80"></th>
                            <th className="pl-2 pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] min-w-[100px] bg-white/80">
                              Nombre
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Rating
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Dificultad
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Tiempo
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Porciones
                            </th>
                            <th className="rounded-r-lg pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Categoría
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {recipes.map((recipe) => (
                            <tr 
                              key={recipe.id} 
                              className="cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                              onClick={() => openRecipeModal(recipe)}
                            >
                              <td className="whitespace-nowrap">
                                <div className='bg-white/80 rounded-l-lg h-30 w-40 transition-all duration-300'>
                                  <div className="flex-shrink-0 h-10 w-40">
                                    <img
                                      className="h-30 w-40 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                                      src={recipe.imageSrc}
                                      alt={recipe.name}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 transition-all duration-300'>
                                  <div className="px-2 text-[17px] font-medium text-gray-900 font-['Afacad']  line-clamp-1 ">
                                    {recipe.name}
                                  </div>
                                  <div className="px-2 text-[17px] text-gray-500 font-['Afacad'] line-clamp-3 2xl:max-w-[650px] xl:max-w-[390px] lg:max-w-[150px]">
                                    {recipe.description}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad'] lg:max-w-[150px] truncate">
                                    <StarRating rating={parseFloat(recipe.rating) || 4} />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad'] lg:max-w-[150px] truncate">
                                    {recipe.difficulty}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad'] lg:max-w-[150px] truncate">
                                    {recipe.cookingTime}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad'] lg:max-w-[150px] truncate">
                                    {recipe.yield} PAX.
                                  </div>
                                </div>
                              </td>

                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center rounded-r-lg transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad'] lg:max-w-[150px] truncate">
                                    {recipe.category}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Vista Tablet - Tabla compacta */}
                  <div className="hidden md:block xl:hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[600px] border-separate border-spacing-y-1.5">
                        <thead className="">
                          <tr>
                            <th className="rounded-l-lg pr-4 py-3 text-left text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80"></th>
                            <th className="pl-2 pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] min-w-[100px] bg-white/80">
                              Nombre
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Rating
                            </th>
                            <th className="pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Tiempo
                            </th>
                            <th className="rounded-r-lg pr-4 py-3 text-center text-[17px] font-medium text-gray-500 uppercase tracking-wider font-['Afacad'] bg-white/80">
                              Porciones
                            </th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {recipes.map((recipe) => (
                            <tr 
                              key={recipe.id} 
                              className="cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-lg"
                              onClick={() => openRecipeModal(recipe)}
                            >
                              <td className="whitespace-nowrap">
                                <div className='bg-white/80 rounded-l-lg h-30 w-30 transition-all duration-300'>
                                  <div className="flex-shrink-0 h-30 w-30">
                                    <img
                                      className="h-30 w-30 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                                      src={recipe.imageSrc}
                                      alt={recipe.name}
                                    />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 transition-all duration-300'>
                                  <div className="px-2 text-[17px] font-medium text-gray-900 font-['Afacad']">
                                    {recipe.name}
                                  </div>
                                  <div className="px-2 text-[17px] text-gray-500 font-['Afacad'] line-clamp-3">
                                    {recipe.description}
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad']">
                                    <StarRating rating={parseFloat(recipe.rating) || 4} />
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad']">
                                    {recipe.cookingTime} min
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div className='bg-white/80 h-30 w-full py-2 flex items-center rounded-r-lg transition-all duration-300'>
                                  <div className="align-center px-2 text-[17px] font-medium text-gray-900 font-['Afacad']">
                                    {recipe.yield} PAX.
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Vista Mobile - Solo imagen y nombre */}
                  <div className="md:hidden">
                    <div className="space-y-3">
                      {recipes.map((recipe) => (
                        <div 
                          key={recipe.id} 
                          className="cursor-pointer transition-all duration-300 bg-white/80 rounded-lg hover:scale-[1.02] hover:shadow-lg"
                          onClick={() => openRecipeModal(recipe)}
                        >
                          <div className="flex items-center">
                            {/* Imagen */}
                            <div className="flex-shrink-0">
                              <div className="rounded-l-lg h-43 w-40 flex items-center justify-center">
                                <img
                                  className="h-43 w-40 object-cover rounded-l-lg transition-transform duration-300 hover:scale-105"
                                  src={recipe.imageSrc}
                                  alt={recipe.name}
                                />
                              </div>
                            </div>
                            
                            {/* Nombre, rating y descripción */}
                            <div className="w-full px-3 rounded-r-lg">
                              <div className="text-[20px] font-medium text-gray-900 font-['Afacad'] line-clamp-3">
                                {recipe.name}
                              </div>
                              <div className="flex items-center mt-1">
                                <StarRating rating={parseFloat(recipe.rating) || 4} />
                              </div>
                              <div className="text-[17px] font-medium text-gray-900 font-['Afacad']">
                                {recipe.cookingTime} min
                              </div>
                              <div className="text-[17px] text-gray-600 font-['Afacad'] mt-1">
                                {recipe.yield} PAX.
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Loading más recetas */}
                  {loadingMore && (
                    <div className="text-center py-4 border-t">
                      <div className="inline-block animate-spin h-6 w-6 border-b-2 border-amber-600"></div>
                      <p className="mt-2 text-gray-600 font-['Afacad'] text-sm">Cargando más recetas...</p>
                    </div>
                  )}
                </div>

                {/* Botón cargar más */}
                {hasMore && !loadingMore && recipes.length > 0 && lastId !== null && (
                  <div className="text-center mt-6 sm:mt-8">
                    <button
                      onClick={handleLoadMore}
                      className="px-6 sm:px-8 py-3 bg-[#38211A] text-white hover:bg-[#000000] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent font-['Afacad'] font-semibold text-[17px] sm:text-base transition-all duration-300 hover:scale-105 hover:brightness-95"
                    >
                      Cargar más recetas
                    </button>
                    <p className="text-gray-600 mt-2 font-['Afacad'] text-[17px]">
                      Mostrando {recipes.length} recetas
                    </p>
                  </div>
                )}

                {/* Mensaje cuando no hay más recetas */}
                {!hasMore && recipes.length > 0 && (
                  <div className="text-center mt-6 sm:mt-8">
                    <p className="text-white font-['Afacad'] text-[17px]">
                      {isSearching 
                        ? `Se encontraron ${recipes.length} recetas con los filtros aplicados`
                        : `¡Has visto todas las recetas! (${recipes.length} recetas)`
                      }
                    </p>
                  </div>
                )}

                {/* Mensaje cuando no hay recetas */}
                {!loading && recipes.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-white font-['Afacad'] text-sm sm:text-base">
                      No se encontraron recetas
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      </div>

      {/* Modal de receta */}
      <RecipeModal
        recipe={selectedRecipe}
        isOpen={isModalOpen}
        onClose={closeRecipeModal}
      />
    </div>
  );
};

export default Recipes;