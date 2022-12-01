import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import { createBuyOrderFirestoreWithStock } from "../../service/firebase";
import Button from "../Button/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import BuyForm from "./BuyForm";

  
function CartView () {
const navigate = useNavigate();
const {cart, totalPriceInCart, clearCart,removeItem} = useContext(cartContext);

if (cart.lenght === 0) return <h1>Carrito vacío</h1>

function createBuyOrder (userData) {
  const buyData = {
    buyer: userData,
    items: cart,
    total: totalPriceInCart(),
    date: new Date(),
  };

  createBuyOrderFirestoreWithStock(buyData).then((orderId) => {
      clearCart();
      navigate (`/checkout/${orderId}`);

      Swal.fire({
      title: "Gracias por tu compra",
      text: `El identificador de tu orden es ${orderId}`,
      icon: 'success',
    });
  });
}

return (
 <div>
        <h1>TU CARRITO</h1>
        {cart.map ((cartItem) => (
          <div key={cartItem.id}>
              <img src={cartItem.thumbnail} alt={cart.title}/>
              <h4>&#x2B50;{cartItem.title}</h4>
              <h4>${cartItem.price}</h4>
              <h4>Cantidad:{cartItem.count}</h4>
                <button onClick={()=> removeItem(cartItem.id)} type="danger">
                  X
                </button>
  </div>
      ))}
      <Button type="alert" onClick={clearCart}>
        Vaciar Carrito
      </Button>
      <h2>Total a pagar: ${totalPriceInCart()}</h2>

      <BuyForm onSubmit={createBuyOrder} />
    </div>
    );
  
}

export default CartView;