// exportacion del contexto
import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar al carrito
  const addToCart = (item) => {
    let isInCart = cart.some((product) => product.id === item.id); // booleano

    if (isInCart) {
      let nuevoArray = cart.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: product.quantity + item.quantity };
        } else {
          return product;
        }
      });
      setCart(nuevoArray);
    } else {
      setCart([...cart, item]);
    }
  };

  //eliminar del carrito
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  //limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = (id) => {
    const product = cart.find((elemento) => elemento.id === id);
    // return product ? product.quantity : 0
    if (product) {
      return product.quantity;
    } else {
      return 0;
    }
  };

  const getTotalAmount = () => {
    let total = cart.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    return total;
  };

  let dataValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalQuantity,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={{ dataValue }}>
      {children}
    </CartContext.Provider>
  );
};
