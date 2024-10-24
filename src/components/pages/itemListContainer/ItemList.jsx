import { Cards } from "../../common/card/Cards";
export const ItemList = ({ items }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Cards
            key={id}
            title={title}
            price={price}
            stock={stock}
            image={imageUrl}
            id={id}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
