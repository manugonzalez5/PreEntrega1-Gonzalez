import { Counter } from "../../common/counter/Counter";
import "./itemDetail.css";

export const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div className="itemDetail">
      <img src={item.imageUrl} alt="" style={{ width: "300px" }} />
      <div className="info">
        <h2>{item.title}</h2>
        <h2>${item.price}</h2>
        <h2>{item.description}</h2>
      </div>

      <Counter
        stock={item.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
      />
    </div>
  );
};
