import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <ItemListContainer greetings="Bienvenidos a  T-burgers" />
      </>
    </div>
  );
}

export default App;
