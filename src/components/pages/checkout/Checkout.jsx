import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import "./checkout.css";

export const Checkout = () => {
  const { dataValue } = useContext(CartContext);
  const { cart, clearCart, getTotalAmount } = dataValue;

  const [orderId, setOrderId] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();
    const total = getTotalAmount();
    // comunicarnos con la api
    const order = {
      buyer: userInfo,
      items: cart, //[ {} {} {}]
      total: total,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order).then((res) => {
      setOrderId(res.id);
      clearCart();
    });

    let refCol = collection(db, "products");
    order.items.forEach((item) => {
      let refDoc = doc(refCol, item.id);
      updateDoc(refDoc, { stock: item.stock - item.quantity });
    });
  };

  const capturarInfo = (evento) => {
    const { name, value } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  if (orderId) {
    return (
      <div className="orderId">
        <h2>Gracias por tu compra tu ticket es : {orderId}</h2>
      </div>
    );
  }

  // const deleteById = (id) => {
  //   let refDoc = doc(db, "products", id);
  //   deleteDoc(refDoc);
  //   console.log("eliminado");
  // };

  return (
    <div className="checkoutForm">
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="Nombre Apellido"
          name="name"
          onChange={capturarInfo}
        />
        <input
          type="email"
          placeholder="WYBxh@example.com"
          name="email"
          onChange={capturarInfo}
        />
        <input
          type="text"
          placeholder="1155444878"
          name="phoneNumber"
          onChange={capturarInfo}
        />
        <button className="comprar">COMPRAR</button>
        <button type="button" className="cancelar">
          CANCELAR
        </button>
      </form>
    </div>
  );
};

export default Checkout;
