import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ComputerIcon from "@mui/icons-material/Computer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import HomeIcon from "@mui/icons-material/Home";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        sx={{ width: 500, backgroundColor: "#eee" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="INICIO" icon={<HomeIcon />} />
        <BottomNavigationAction label="PRODUCTOS" icon={<Inventory2Icon />} />
        <BottomNavigationAction label="ARMA TU PC" icon={<ComputerIcon />} />
        <BottomNavigationAction label="NOSOTROS" icon={<HelpOutlineIcon />} />
        <BottomNavigationAction label="CONTACTO" icon={<ContactPageIcon />} />
      </BottomNavigation>
    </Box>
  );
}
