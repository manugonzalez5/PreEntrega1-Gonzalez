import axios from "axios";
import { useEffect, useState } from "react";

export const FetchingAsync = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    //     const getProducts = async () => {
    //       const res = await fetch("https://fakestoreapi.com/products");
    //       const data = await res.json();
    //       setProducts(data);
    //     };
    //     getProducts();
    //   }, []);

    const getProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        console.log("Finally");
      }
    };
    getProducts();
  }, []);

  console.log(products);
  return <div>FetchingAsync</div>;
};
