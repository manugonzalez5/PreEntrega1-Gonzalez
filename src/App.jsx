import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemDetailContainer } from "./components/pages/itemDetail/ItemDetailContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Checkout } from "./components/pages/checkout/Checkout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 NOT FOUND!</h1>} />
        </Routes>
        <CssBaseline />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
