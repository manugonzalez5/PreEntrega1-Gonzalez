import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -2,
      top: 5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const { dataValue } = useContext(CartContext);
  const { cart } = dataValue; // siempre devuelve el objeto del value

  let total = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={total} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};
