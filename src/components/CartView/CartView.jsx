import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import FlexWrapper from "../FlexWrapper/Flexwrapper";
import {createBuyOrderFirestore} from "../../service/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function CartView () {


const {cart, removeItem, totalPriceInCart, clearCart} = useContext(cartContext);
const navigate = useNavigate();

if (cart.lenght === 0) return <h1>Carrito vacío</h1>


function buyData () {
    buyer: { 
      name: "Oriana Perdomo";
      phone: "123456789";
      email: "orianaperdomo@gmail.com";
    }
    items: cart;
    total: totalPriceInCart;
    date: new Date();
  }

  createBuyOrderFirestore(buyData).then((orderId) => {
    console.log(orderId);
    clearCart();
    navigate (`/checkout/${orderId}`);

    Swal.fire({
     title: "Gracias por tu compra",
     text: `El identificador de tu orden es ${orderId}`,
     icon: 'success',
    })
})
  

  return (
        <FlexWrapper>
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
            <button onClick={clearCart} type="alert">
              Vaciar carrito
            </button>
            <button onClick={createBuyOrder} type="alert">
              Finalizar compra
            </button>
            <h2>Total a pagar: ${totalPriceInCart()}</h2>
          </div>
      ))}
             </FlexWrapper>


)
}

export default CartView;