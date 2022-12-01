import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
                  <h1>astrologiarte</h1>
      <Link to="/category/accesorios">Productos</Link>
      <Link to="/category/servicios">Servicios</Link>
      <Link to="/category/libros">Libros</Link>      
      <Link to="/cart"><Button><CartWidget /></Button></Link>
    </nav>
  );
}

export default NavBar;