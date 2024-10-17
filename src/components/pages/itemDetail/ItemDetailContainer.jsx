import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { products } from "../../products";

export const ItemDetailContainer = () => {
  let id = "2";
  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((producto) => producto.id === id);
    setItem(productSelected);
  }, [id]);

  return <ItemDetail item={item} />;
};
