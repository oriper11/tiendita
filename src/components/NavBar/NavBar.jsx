import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3><Link to="/">ASTROLOGIARTE</Link></h3>
      <Link to="/category/accesorios">Productos</Link>
      <Link to="/category/servicios">Servicios</Link>
      <Link to="/category/libros">Libros</Link>      
      <CartWidget />
    </nav>
  );
}

export default NavBar;