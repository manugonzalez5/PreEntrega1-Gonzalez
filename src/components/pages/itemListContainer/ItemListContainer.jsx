import { useEffect, useState } from "react";
import { products } from "../../products";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

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

  // if con return temprano
  // if (items.length === 0) {
  //   return (
  //     <div>
  //       <h1>Cargando...</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <h2>Titulo de la app</h2>
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
      <h4>Algo mas</h4>
    </div>
  );
};

export default ItemListContainer;
