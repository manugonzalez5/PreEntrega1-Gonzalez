import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { dataValue } = useContext(CartContext);
  const { addToCart, getTotalQuantity } = dataValue;
  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado correctamente", {
      position: "bottom-right",
    });
  };
  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
