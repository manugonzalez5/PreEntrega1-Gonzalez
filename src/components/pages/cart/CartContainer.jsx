import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
export const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Aca el carrito</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: {item.price}</p>
            <button onClick={() => clearCart(item.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.lenght > 0 && <button onClick={clearCart}>Limpiar carrito</button>};
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
