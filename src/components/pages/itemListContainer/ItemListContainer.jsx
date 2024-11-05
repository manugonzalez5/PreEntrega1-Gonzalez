import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
//import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}.name --> undefined

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef)
      .then((res) => {
        let arrayEntendible = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setItems(arrayEntendible);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  // const funcionParaAgregar = () => {
  //   const productsCollection = collection(db, "products");
  //   items.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };

  return (
    <div>
      {items.length === 0 ? <h1>Cargando...</h1> : <ItemList items={items} />}
      {/* <button onClick={funcionParaAgregar}>Agregar al backend</button> */}
    </div>
  );
};

export default ItemListContainer;
