import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext debe ser usado dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
        setCart([]);
      }
    }
  }, []);

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Mostrar notificación
  const showNotification = (message) => {
    setNotification(message);
    // Ocultar automáticamente después de 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Agregar producto al carrito
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        const updatedCart = prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        showNotification(`¡${product.name} agregado al carrito! (${existingItem.quantity + 1} unidades)`);
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          imageSrc: product.imageSrc,
          quantity: 1
        }];
        showNotification(`¡${product.name} agregado al carrito!`);
        return updatedCart;
      }
    });
  };

  // Eliminar producto del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  // Actualizar cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Incrementar cantidad
  const incrementQuantity = (productId) => {
    const currentQuantity = cart.find(item => item.id === productId)?.quantity || 0;
    updateQuantity(productId, currentQuantity + 1);
  };

  // Decrementar cantidad
  const decrementQuantity = (productId) => {
    const currentQuantity = cart.find(item => item.id === productId)?.quantity || 0;
    updateQuantity(productId, currentQuantity - 1);
  };

  // Obtener cantidad de un producto específico
  const getQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  // Obtener cantidad total de items
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener subtotal
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    getQuantity,
    getTotalItems,
    getSubtotal,
    clearCart,
    notification
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Exportación por defecto opcional
export default CartProvider;