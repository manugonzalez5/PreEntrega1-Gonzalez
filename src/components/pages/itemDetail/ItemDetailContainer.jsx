import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";

export const ItemDetailContainer = () => {
  const { id } = useParams(); // {}
  const { addToCart } = useContext(CartContext);
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);
  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Agregado al carrito");
  };

  return <ItemDetail item={item} agregarAlCarrito={agregarAlCarrito} />;
};

export default ItemDetailContainer;
