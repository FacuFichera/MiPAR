import { useState } from "react";
import { useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs , query , where } from "firebase/firestore";
import { db } from "../firebase/data";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const categoria = useParams().categoria;

  useEffect(() => {
    const ItemsRef = collection(db, "Items");

    const q = categoria ?  query(ItemsRef , where ("categoria", "==" , categoria)) : ItemsRef;

    getDocs(q)
    .then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return <ItemList productos={productos} />;
};

export default ItemListContainer;
