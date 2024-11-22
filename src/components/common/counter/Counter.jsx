import { useState } from "react";
import { toast } from "sonner";
import "./counter.css";

export const Counter = ({ stock, agregarAlCarrito, totalInCart }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    if (stock - totalInCart > contador) {
      setContador(contador + 1);
    } else {
      toast.error("No hay stock suficiente");
    }
  };
  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <div
      className="counter"
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar} className="sumar">
        +
      </button>
      <h2 className="contador">{contador}</h2>
      <button onClick={restar} className="restar">
        -
      </button>
      <button onClick={() => agregarAlCarrito(contador)} className="agregar">
        Agregar al carrito
      </button>
    </div>
  );
};
