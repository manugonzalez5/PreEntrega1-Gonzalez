import { useEffect, useState } from "react";
import { products } from "../../products";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
//import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}.name --> undefined

  const [items, setItems] = useState([]);

  useEffect(() => {
    const unaFraccion = products.filter(
      (producto) => producto.category === name
    );
    const getProducts = new Promise((resolve) => {
      resolve(name ? unaFraccion : products);
    });
    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);

  // if (items.length === 0) {
  //   return items ? (
  //     <img
  //       style={{
  //         width: 210,
  //         height: 118,
  //       }}
  //       alt={items.title}
  //       src={items.src}
  //     />
  //   ) : (
  //     <Skeleton variant="rectangular" width={210} height={118} />
  //   );
  // }

  return (
    <div>
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
