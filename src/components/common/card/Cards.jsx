import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

export const Cards = ({ title, price, stock, image, id }) => {
  return (
    <div
      style={{
        border: "2px solid white",
        width: "200px",
        height: "300px",
      }}
    >
      <img src={image} alt="" style={{ width: "100px" }} />
      <h2>{title}</h2>
      <h3>Precio: ${price}</h3>
      <h3>Stock: {stock}</h3>
      <Stack direction="row" spacing={2}>
        <Link to={`/itemDetail/${id}`}>
          <Button variant="contained">Ver detalle</Button>
        </Link>
      </Stack>
    </div>
  );
};
