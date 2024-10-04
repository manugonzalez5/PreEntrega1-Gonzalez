import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { Counter } from "./components/common/counter/Counter";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
