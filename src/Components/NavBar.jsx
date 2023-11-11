import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <h1 className="tituloDelLogo">T-burgers</h1>
        <img className="logo1" src="../img/1.jpeg" alt="" />
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos">
            Productos
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/Hamburguesa">
            Hamburguesa
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/productos/PanchoPapas">
            PanchoPapas
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="/contacto">
            Contacto
          </Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
