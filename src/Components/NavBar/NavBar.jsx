import "./NavBar.css";
import { CardWidget } from "../CardWidget/CardWidget";

export const NavBar = () => {
  return (
    <div className="contenedorNavBar">
      <img src="../img/1.jpeg" alt="" />

      <div className="navBar_Items">
        <a href="a">Hamburgesas</a>
        <a href="a">Contacto</a>
        <a href="a">Nosotros</a>
        <a href="a">{<CardWidget />}</a>
      </div>
    </div>
  );
};
