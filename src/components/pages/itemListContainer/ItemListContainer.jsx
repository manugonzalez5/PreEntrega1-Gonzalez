import { useEffect, useState } from "react";
import { products } from "../../products";
import "./ItemListContainer.css";
import { ItemList } from "../../common/itemlist/ItemList";

let myProductsPromise = new Promise((res, rej) => {
  setTimeout(() => {
    if (products.lenght === 0) {
      rej("No products found");
    } else {
      res(products);
    }
  }, 2000);
});

export const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);
  useEffect(() => {
    myProductsPromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, []);

  console.log(myProducts);
  return (
    <div className="il-container">
      <ItemList myProducts={myProducts} />
    </div>
  );
};
