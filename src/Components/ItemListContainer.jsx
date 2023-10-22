import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import {DevuelveDatos,} from "../Ayudas";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;
  

  useEffect(() => {
    DevuelveDatos()
    .then((res) => {
        if(categoria){
          setProductos(res.filter((prod)=> prod.categoria===categoria));
        }else{
          setProductos(res);
        }
       
    });
  }, [categoria]);

  return (
    <ItemList productos={productos}/>
  );
};

export default ItemListContainer;
