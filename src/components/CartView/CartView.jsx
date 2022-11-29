import React, { useContext } from "react";
import cartContext from "../../storage/CartContext";
import FlexWrapper from "../FlexWrapper/Flexwrapper";

function CartView(){
  
  const {cart,removeItem,clearCart} = useContext(cartContext)
  
if (cart.length === 0)
  return <h1>Carrito vacío</h1>
  

  return (
    <div>
      <h1>TU CARRITO</h1>
      {
        cart.map( cartItem => (
          <FlexWrapper>
             <table>
            <h4>&#x2B50;{cartItem.title}</h4>
            <div key={cartItem.id}>
            <img src={cartItem.thumbnail} alt={cart.title}/>
            <h4>${cartItem.price}</h4>
            <h4>Cantidad:{cartItem.count}</h4>
            <h4>Precio total:${cartItem.count * cartItem.price}</h4>
            <button onClick={()=> removeItem(cartItem.id)} type="danger">X</button>
            </div>
            <button onClick={()=> clearCart(cartItem.id)} type="alert">Vaciar carrito</button>
          </table>
          </FlexWrapper>
          
        ))
      }
      

    </div>
  )
}
export default CartView;