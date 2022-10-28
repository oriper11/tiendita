import Button from "../Button/Button";
import CartWidget from "../CartWidget/CartWidget";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav-menu">
      <h3>Mi tienda</h3>
      <a href="App.js">Nuestra historia</a>
      <a href="/">Servicios</a>
      <a href="/">Shop</a>
      <a href="/">Contacto</a>
      <Button><CartWidget /></Button>
      
    </nav>
  );
}

export default NavBar;