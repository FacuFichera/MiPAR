import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CarroLs = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([CarroLs]);

  const handleAgregar = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarro = [...carrito];
    const estaEnElCarro = nuevoCarro.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarro) {
      estaEnElCarro.cantidad = estaEnElCarro.cantidad + cantidad;
      setCarrito(nuevoCarro);
    } else {
      nuevoCarro.push(itemAgregado);
    }
    setCarrito(nuevoCarro);
  };

  const CantidadCarro = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const vaciarCarro = () => {
    setCarrito([]);
  };

  useEffect(()=>{
    localStorage.setItem("carrito",JSON.stringify(carrito))
  },[carrito])


  return (
    <CartContext.Provider
      value={{
        carrito,
        handleAgregar,
        CantidadCarro,
        precioTotal,
        vaciarCarro,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
