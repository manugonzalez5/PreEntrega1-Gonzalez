import { Counter } from "../../common/counter/Counter";

export const ItemDetail = ({ item, agregarAlCarrito, totalInCart }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <h2>{item.description}</h2>
      <img src={item.imageUrl} alt="" style={{ width: "300px" }} />

      <Counter
        stock={item.stock}
        agregarAlCarrito={agregarAlCarrito}
        totalInCart={totalInCart}
      />
    </div>
  );
};
