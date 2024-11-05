import { Cardss } from "../../common/card/Cardss";
import "./ItemList.css";

export const ItemList = ({ items }) => {
  return (
    <>
      <div className="title">
        <h2>Listado de productos</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {items.map(({ id, title, price, stock, imageUrl }) => (
          <Cardss
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
