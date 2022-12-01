import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../../storage/CartContext";

function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      
      {totalItemsInCart() > 0 ? (
            <><div><Link to="/cart">🛒</Link></div><span> {totalItemsInCart()} </span></>
        ) : (
          <></>
        )}
      </div>
    );
  }
export default CartWidget;