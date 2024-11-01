import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
export const CartContainer = () => {
  const { dataValue } = useContext(CartContext);
  const { cart, clearCart, removeFromCart, getTotalAmount } = dataValue;

  let totalEnElCarrito = getTotalAmount();
  return (
    <div>
      <h1>Aca el carrito</h1>
      {cart.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h3>Cantidad: {item.quantity}</h3>
            <h3>Precio: ${item.price}</h3>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        );
      })}
      {cart.lenght > 0 && <button onClick={clearCart}>Limpiar carrito</button>}

      <h2 style={{ color: cart.length > 0 ? "green" : "red" }}>
        El total a pagar es ${totalEnElCarrito}
      </h2>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
