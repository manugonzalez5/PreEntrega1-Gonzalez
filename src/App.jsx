import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Checkout } from "./components/pages/checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "sonner";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import { Layout } from "./components/layout/Layout";
import { routes } from "./routes/routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        richColors
        duration={2000}
      />
      <CartProvider>
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route element={<Layout />}>
              {routes.map(({ id, path, Element }) => (
                <Route key={id} path={path} element={<Element />} />
              ))}
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
          <CssBaseline />
        </ThemeProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
