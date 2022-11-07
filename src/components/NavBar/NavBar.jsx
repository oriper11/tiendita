import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3>ASTROLOGIARTE</h3>
      <Link to="/category/accesorios">Productos</Link>
      <Link to="/category/servicios">Servicios</Link>
      <Link to="/category/libros">Libros</Link>      
      <Link to="/">Contacto</Link>
      <Link to=""><Button><CartWidget /></Button></Link>
    </nav>
  );
}

export default NavBar;