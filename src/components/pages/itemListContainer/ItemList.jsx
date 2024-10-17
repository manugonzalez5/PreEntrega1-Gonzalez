import { Cards } from "../../common/card/Cards";

export const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Listado de productos</h2>
      {items.map((item) => (
        <Cards
          key={item.id}
          title={item.title}
          price={item.price}
          stock={item.stock}
        ></Cards>
      ))}
    </div>
  );
};
