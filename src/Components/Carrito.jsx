import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito , precioTotal , vaciarCarro } = useContext(CartContext);

  const Vaciar = () =>{
    vaciarCarro();
  }

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.titulo}</h3>
          <p>Precio por unidad: ${prod.precio}</p>
          <p>Cantidad: {prod.cantidad}</p>
          <p>Precio total: ${prod.precio * prod.cantidad}</p>
          
        </div>
      ))}

        <h2>Precio Total de la compra:${precioTotal()} </h2>
        <button onClick={Vaciar}>Vaciar</button>
        <Link to = "/CheckOut"> Terminar Pedido </Link>


    </div>
  );
};

export default Carrito;
