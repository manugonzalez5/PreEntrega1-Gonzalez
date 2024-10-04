import { Box, Button, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const PruebaComponentes = () => {
  const [visible, setVisible] = useState(false);
  const cambiarVisibilidad = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ margin: "100px" }}>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <TextField
          variant="outlined"
          label="Contraseña"
          type={visible ? "text" : "password"}
        />
        <IconButton onClick={cambiarVisibilidad}>
          {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
        </IconButton>
      </Box>
      <Button variant="outlined" sx={{ marginTop: "10px" }}>
        Ingresar
      </Button>
    </div>
  );
};
