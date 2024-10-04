//hook
// useState
import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
};
