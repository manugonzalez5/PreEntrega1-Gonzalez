import { useState } from "react";

export const Counter = ({ stock, agregarAlCarrito }) => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    stock > contador ? setContador(contador + 1) : alert("No hay más stock");
  };
  const restar = () => {
    setContador(contador - 1 < 1 ? 1 : contador - 1);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <button onClick={sumar}>Sumar</button>
      <h2>Contador = {contador}</h2>
      <button onClick={restar}>Restar</button>
      <button onClick={() => agregarAlCarrito(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};
