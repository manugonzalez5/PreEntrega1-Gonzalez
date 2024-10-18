//import axios from "axios";
import { useEffect } from "react";
import { productsInstance } from "../api/productsInstance";
export const FetchingData2 = () => {
  useEffect(() => {
    const getProductos = productsInstance.get("/");
    getProductos
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
      .finally(() => console.log("Finally"));
  }, []);

  const createProduct = () => {
    const nuevoProducto = {
      title: "nuevo producto",
      precio: 123,
      stock: 10,
    };
    productsInstance.post("/", nuevoProducto, {});
  };
  console.log(createProduct);
  return <div>FetchingData2</div>;
};
