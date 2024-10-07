import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Hola, bienvenido a nuestra tienda Gamer! Pronto estaremos preparados para brindarte la mejor experiencia." />
    </div>
  );
}

export default App;
