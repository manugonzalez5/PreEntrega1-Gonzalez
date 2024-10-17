import { Navbar } from "./components/layout/navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
      </ThemeProvider>
      <Navbar />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
