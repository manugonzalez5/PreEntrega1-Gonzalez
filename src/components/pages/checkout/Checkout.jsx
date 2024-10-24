import { useState } from "react";
export const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="nombre apellido"
          name="name"
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="mail"
          placeholder="example@gmail.com"
          name="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="0123456789"
          name="phoneNumber"
          onChange={(e) =>
            setUserData({ ...userData, phoneNumber: e.target.value })
          }
        />
        <button>Comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};
