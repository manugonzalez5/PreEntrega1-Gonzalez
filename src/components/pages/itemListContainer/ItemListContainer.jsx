import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import {
  Box,
  CircularProgress,
  circularProgressClasses,
  Stack,
} from "@mui/material";

//import { Skeleton } from "@mui/material";

export const ItemListContainer = () => {
  const { name } = useParams(); // {}.name --> undefined

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");

    let docsRef = productsCollection;
    if (name) {
      docsRef = query(productsCollection, where("category", "==", name));
    }
    getDocs(docsRef)
      .then((res) => {
        let arrayEntendible = res.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
        setItems(arrayEntendible);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  // const funcionParaAgregar = () => {
  //   const productsCollection = collection(db, "products");
  //   items.forEach((product) => {
  //     addDoc(productsCollection, product);
  //   });
  // };

  if (items.length === 0) {
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
    <div>
      <ItemList items={items} />
      {/* <button onClick={funcionParaAgregar}>Agregar al backend</button> */}
    </div>
  );
};

export default ItemListContainer;
