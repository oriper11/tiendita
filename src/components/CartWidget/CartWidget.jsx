import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";

function CartWidget() {
  const context = useContext(cartContext);
  console.log(context)

  return (
    <div>
      <div>🛒</div>
      <small>{context.itemsInCart}</small>
    </div>
      
      )
}

export default CartWidget;