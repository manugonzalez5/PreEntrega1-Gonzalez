import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
      <ItemListContainer />
    </div>
  );
}

export default App;
