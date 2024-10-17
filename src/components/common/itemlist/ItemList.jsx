import { Cards } from "../card/Cards";
export const ItemList = ({ myProducts }) => {
  return myProducts.map(({ id, title, price, stock, imageUrl }) => (
    <Cards
      key={id}
      title={title}
      price={price}
      stock={stock}
      image={imageUrl}
    />
  ));
};
