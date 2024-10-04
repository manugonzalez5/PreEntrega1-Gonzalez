import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const PruebaGrid = () => {
  return (
    <div>
      <Grid container={true}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography
            align="center"
            sx={{
              backgroundColor: "red",
              margin: "10px",
              display: "flex",
            }}
          >
            Caja 1
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography sx={{ backgroundColor: "blue" }}>Caja 2</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Typography sx={{ backgroundColor: "green" }}>Caja 3</Typography>
        </Grid>
      </Grid>
    </div>
  );
};
