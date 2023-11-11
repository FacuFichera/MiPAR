import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { CantidadCarro } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/Carrito">
         Carrito 
        <span className="numerito"> { CantidadCarro()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
