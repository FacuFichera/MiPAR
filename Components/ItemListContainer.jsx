import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import {DevuelveDatos,} from "../Ayudas";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  

  useEffect(() => {
    DevuelveDatos()
    .then((res) => {
        setProductos(res);
    });
  }, []);

  return (
    <ItemList productos={productos}/>
  );
};

export default ItemListContainer;
