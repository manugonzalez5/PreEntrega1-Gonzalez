// exportacion del contexto
import { createContext, useState } from "react";
export const CartContext = createContext();

// exportacion del componente de react que provea el contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //agregar al carrito
  const addToCart = (item) => {
    // si esta, que no lo agregue
    // si no esta, que lo agregue
    // let isInCart = cart.filter ((product) => product.id === item.id) // []
    // let isInCart = cart.find ((product) => product.id === item.id) // elemento || undefined
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

  const getTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
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
