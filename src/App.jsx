import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Contacto from "./Components/contacto";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Carrito from "./Components/Carrito";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/productos" element={<ItemListContainer />}></Route>
            <Route
              path="/productos/:categoria"
              element={<ItemListContainer />}
            ></Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/Carrito" element={<Carrito />}></Route>
            <Route path="/CheckOut" element={<CheckOut />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
