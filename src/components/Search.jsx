import { useState, useEffect, useRef } from 'react';
import StaticDataService from '../services/staticDataService';

const Search = ({ onProductSelect, onRecipeSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Buscar en tiempo real
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim().length > 2) {
        performSearch(searchTerm);
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  const performSearch = async (term) => {
    if (!term.trim()) return;
    
    setIsLoading(true);
    try {
      const result = await StaticDataService.globalSearch({
        searchTerm: term,
        lastId: 0,
        searchType: 'all'
      });
      
      if (result.success) {
        setSearchResults(result.searchResults.data.slice(0, 8)); // Limitar a 8 resultados
        setShowDropdown(true);
        setSelectedIndex(-1);
      } else {
        setSearchResults([]);
        setShowDropdown(false);
      }
    } catch (error) {
      console.error('Error en búsqueda:', error);
      setSearchResults([]);
      setShowDropdown(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!showDropdown) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < searchResults.length) {
          handleItemSelect(searchResults[selectedIndex]);
        } else if (searchTerm.trim()) {
          handleSearchSubmit();
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleItemSelect = (item) => {
    if (item.type === 'product' && onProductSelect) {
      onProductSelect(item);
    } else if (item.type === 'recipe' && onRecipeSelect) {
      onRecipeSelect(item);
    }
    setShowDropdown(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim()) {
      performSearch(searchTerm);
    }
  };

  const getItemTypeText = (type) => {
    return type === 'product' ? 'Producto' : 'Receta';
  };

  return (
    <div className="flex justify-center items-center w-full my-3 px-5 relative" ref={searchRef}>
      <div className="flex rounded-full shadow-lg border border-gray-200 overflow-hidden w-full max-w-[600px] md:h-13 h-10 relative">
        <input 
          id="query" 
          type="text" 
          name="query" 
          placeholder="Pastel de chocolate relleno de fresas..." 
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-1 px-6 bg-white/30 font-['Podkova'] backdrop-blur-xs text-white md:text-[23px] text-[17px] placeholder-white/70 focus:outline-none min-w-0"
          autoComplete="off"
        />
        <button 
          type="button" 
          onClick={handleSearchSubmit}
          disabled={isLoading}
          className="bg-black/30 w-35 hover:bg-blue-700 text-white px-6 font-['Podkova'] text-[20px] transition duration-300 whitespace-nowrap disabled:opacity-50 flex-shrink-0"
        >
          {isLoading ? '🔍' : 'Buscar'}
        </button>
      </div>

      {/* Dropdown de resultados */}
      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="absolute top-full mt-2 w-full max-w-2xl backdrop-blur-xs bg-white/80 rounded-lg shadow-xl max-h-80 overflow-y-auto z-50"
        >
          {searchResults.length === 0 ? (
            <div className="p-4 text-center text-gray-500 font-['Afacad']">
              {isLoading ? 'Buscando...' : 'No se encontraron resultados'}
            </div>
          ) : (
            <div className="py-2">
              {searchResults.map((item, index) => (
                <div key={`${item.type}-${item.id}`}>
                  <div
                    className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
                      index === selectedIndex 
                        ? 'bg-amber-50 border-r-2 border-amber-500' 
                        : 'hover:bg-gray-50'
                    }`}
                    onClick={() => handleItemSelect(item)}
                  >
                    {/* Imagen */}
                    <div className="flex-shrink-0 w-20 h-25 mr-3">
                      <img
                        src={item.imageSrc}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    {/* Información */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-['Afacad'] font-semibold text-gray-900 text-[20px] truncate">
                          {item.name}
                        </h3>
                        <span className={`text-[17px] px-2 py-1 rounded-full ${
                          item.type === 'product' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-green-100 text-green-800'
                        } font-['Afacad']`}>
                          {getItemTypeText(item.type)}
                        </span>
                      </div>
                      
                      <p className="font-['Afacad'] text-gray-600 text-[17px] truncate mb-1">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        {item.type === 'product' && (
                          <p className="font-['Afacad'] text-amber-600 font-bold text-[17px]">
                            Precio: ${item.price}
                          </p>
                        )}
                        
                        {item.type === 'recipe' && (
                          <div className="flex items-center space-x-3">
                            <span className="font-['Afacad'] text-gray-500 text-[15px]">
                              ⏱ {item.cookingTime}min
                            </span>
                            <span className="font-['Afacad'] text-gray-500 text-[15px]">
                              👤 {item.autor}
                            </span>
                          </div>
                        )}
                        
                        {item.type === 'product' && (
                          <div className="flex items-center space-x-2 text-[15px] text-gray-500">
                            <span className="font-['Afacad']">
                              🍽️ {item.yield} porc.
                            </span>
                            <span className="font-['Afacad']">
                              📍 {item.station}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Línea divisora - excepto para el último elemento */}
                  {index < searchResults.length - 1 && (
                    <div className="border-b border-gray-100 mx-4"></div>
                  )}
                </div>
              ))}
              
              {/* Footer del dropdown */}
              <div className="border-t border-gray-200 px-4 py-2 bg-gray-50">
                <p className="font-['Afacad'] text-gray-500 text-xs text-center">
                  {searchResults.length} resultado{searchResults.length !== 1 ? 's' : ''} encontrado{searchResults.length !== 1 ? 's' : ''}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;