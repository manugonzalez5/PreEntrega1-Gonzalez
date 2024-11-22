import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";
export const CartContainer = () => {
  const { dataValue } = useContext(CartContext);
  const { cart, clearCart, removeFromCart, getTotalAmount } = dataValue;

  let totalEnElCarrito = getTotalAmount();

  if (totalEnElCarrito === 0) {
    return (
      <div className="cartEmpty">
        <h1>No hay productos en el carrito</h1>
      </div>
    );
  }
  return (
    <div className="cartContainer">
      {cart.map((item) => {
        return (
          <div key={item.id} className="cartItem">
            <img src={item.imageUrl} alt={item.title} />
            <div className="info">
              <h2>{item.title}</h2>
              <h3>Cantidad: {item.quantity}</h3>
              <h3>Precio: ${item.price}</h3>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
        );
      })}

      {cart.lenght > 0 && <button onClick={clearCart}>Limpiar carrito</button>}
      <div className="total">
        <h2>El total a pagar es ${totalEnElCarrito}</h2>
        <Link to="/checkout" className="checkout">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default CartContainer;
