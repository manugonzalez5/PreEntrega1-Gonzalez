import { Link } from "react-router-dom";

export const Cards = ({ title, price, stock, image, id }) => {
  return (
    <div style={{ border: "2px solid white", width: "200px", height: "300px" }}>
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>{title}</h2>
      <h3>Precio: ${price}</h3>
      <h3>Stock: {stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};
