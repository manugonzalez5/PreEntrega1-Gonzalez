// exportacion del contexto
import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar al carrito
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  //eliminar del carrito
  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  //total a pagar del carrito
  // const totalPayCart = cart.reduce(
  //   (acc, item) => acc + item.quantity * item.price,

  // );

  //limpiar carrito
  const clearCart = () => {
    setCart([]);
  };

  let dataValue = { cart, addToCart, removeFromCart, clearCart };
  return (
    <CartContext.Provider value={{ dataValue }}>
      {children}
    </CartContext.Provider>
  );
};
