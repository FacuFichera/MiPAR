import { CartContext } from "../Context/CartContext";
import ItemCount from "./ItemCount";
import React, { useContext, useState } from "react";

const ItemDetail = ({ item }) => {
  const { carrito, handleAgregar } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleAgregarProducto = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleRestarProducto = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="precio">${item.precio}</p>
          <p className="categoria">{item.categoria}</p>
          <ItemCount
            cantidad={cantidad}
            handleAgregarProducto={handleAgregarProducto}
            handleRestarProducto={handleRestarProducto}
            handleAgregar={() => {
              handleAgregar(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
