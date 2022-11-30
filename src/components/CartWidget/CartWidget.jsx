import React, { useContext } from "react";
import { Route } from "react-router-dom";
import cartContext from "../../storage/CartContext";

function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      
      {totalItemsInCart() > 0 ? (
            <><div><Route path="/cart">🛒</Route></div><span> {totalItemsInCart()} </span></>
      ) : ( 
        <></>
      )}
    </div>
  );
}

export default CartWidget;