import { Link } from "react-router-dom";
export const CartContainer = () => {
  return (
    <div>
      <h1>Aca el carrito</h1>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};
