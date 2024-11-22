import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { toast } from "sonner";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import {
  Box,
  CircularProgress,
  circularProgressClasses,
  Stack,
} from "@mui/material";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { dataValue } = useContext(CartContext);
  const { addToCart, getTotalQuantity } = dataValue;
  let totalInCart = getTotalQuantity(id);

  const [item, setItem] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const docRef = doc(productsCollection, id);
    getDoc(docRef).then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let objeto = { ...item, quantity: cantidad };
    addToCart(objeto);
    toast.success("Producto agregado correctamente", {
      position: "bottom-right",
    });
  };

  if (Object.keys(item).length === 0) {
    function FacebookCircularProgress(props) {
      return (
        <Box sx={{ position: "relative" }}>
          <CircularProgress
            variant="determinate"
            sx={(theme) => ({
              color: theme.palette.grey[200],
              ...theme.applyStyles("dark", {
                color: theme.palette.grey[800],
              }),
            })}
            size={40}
            thickness={4}
            {...props}
            value={100}
          />
          <CircularProgress
            variant="indeterminate"
            disableShrink
            sx={(theme) => ({
              color: "#1a90ff",
              animationDuration: "550ms",
              position: "absolute",
              left: 0,
              [`& .${circularProgressClasses.circle}`]: {
                strokeLinecap: "round",
              },
              ...theme.applyStyles("dark", {
                color: "#308fe8",
              }),
            })}
            size={40}
            thickness={4}
            {...props}
          />
        </Box>
      );
    }
    return (
      <Stack
        spacing={2}
        sx={{
          flexGrow: 4,
          justifyContent: "center",
          alignContent: "center",
          mt: 30,
        }}
        direction="row"
        alignItems="center"
        bgcolor="background.paper"
      >
        <FacebookCircularProgress />
      </Stack>
    );
  }
  return (
    <ItemDetail
      item={item}
      agregarAlCarrito={agregarAlCarrito}
      totalInCart={totalInCart}
    />
  );
};

export default ItemDetailContainer;
