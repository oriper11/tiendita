import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);

  return (
        <div className="carrito"> &#x1F6D2;
      {totalItemsInCart() > 0 ? (
            <Link to="/cart">
    <span> {totalItemsInCart()} </span>
            </Link>
        ) : (
          <></>
        )}
      </div>
   
    );
  }
export default CartWidget;