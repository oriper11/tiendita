import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";

function CartWidget() {
  const {totalItemsInCart} = useContext(cartContext);

  return (
    <div>
      
      {totalItemsInCart() > 0 ? (
            <div>🛒
    <span> {totalItemsInCart()} </span>
            </div>
        ) : (
          <></>
        )}
      </div>
    );
  }
export default CartWidget;