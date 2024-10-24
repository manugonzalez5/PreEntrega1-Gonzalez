import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ComputerIcon from "@mui/icons-material/Computer";
import HomeIcon from "@mui/icons-material/Home";
import MouseIcon from "@mui/icons-material/Mouse";
import { Link } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        sx={{ width: 500, backgroundColor: "#eee" }}
        showlabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="INICIO" icon={<HomeIcon />} />
        </Link>
        <Link to="/category/Laptop">
          <BottomNavigationAction label="LAPTOP" icon={<ComputerIcon />} />
        </Link>
        <Link to="/category/Perifericos">
          <BottomNavigationAction label="PERIFERICOS" icon={<MouseIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
