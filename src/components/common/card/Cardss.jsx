import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Cards.css";

export const Cardss = ({ title, price, image, id }) => {
  return (
    <div className="card">
      <div className="imgBox">
        <img src={image} alt={title} className="mouse" />
      </div>

      <div className="contentBox">
        <h3>{title}</h3>
        <h2 className="price">{price} $</h2>
        <Link to={`/itemDetail/${id}`}>
          <Button className="buy">Ver detalle</Button>
        </Link>
      </div>
    </div>
  );
};
