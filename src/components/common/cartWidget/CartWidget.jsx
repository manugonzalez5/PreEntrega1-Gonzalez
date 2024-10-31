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

  const { cart } = useContext(CartContext); // siempre devuelve el objeto del value

  return (
    <Link to="/cart">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cart.length} color="primary">
          <ShoppingCartIcon fontSize="large" />
        </StyledBadge>
      </IconButton>
    </Link>
  );
};
