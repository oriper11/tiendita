import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3>ASTROLOGIARTE</h3>
      <a href="sec1">Nuestra historia</a>
      <a href="">Servicios</a>
      <a href="/Item.jsx">Shop</a>
      <a href="/Contacto.jsx">Contacto</a>
      <Button><CartWidget /></Button>
      
    </nav>
  );
}

export default NavBar;