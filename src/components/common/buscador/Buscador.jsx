import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Buscador = () => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Buscador"
        variant="outlined"
        placeholder="Buscar productos"
      />
    </Box>
  );
};
