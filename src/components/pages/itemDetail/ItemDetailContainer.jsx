import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { dataValue } = useContext(CartContext);
  const { addToCart, getTotalQuantity } = dataValue;
  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
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
