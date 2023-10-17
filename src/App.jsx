import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import Nosotros from "./Components/Nosotros";
import Contacto from "./Components/contacto";


import "./index.css"
import { BrowserRouter,Route,Routes } from "react-router-dom";  

function App() {
  return (
    <div> 

       <BrowserRouter>
          
          
        <NavBar/>
          <Routes>

            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/contacto" element={<Contacto/>}></Route>
            <Route path="/Nosotros" element={<Nosotros/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          
          </Routes>

       </BrowserRouter>
     
    </div>
  );
}

export default App;
