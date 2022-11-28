import { useState, createContext } from "react";


const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart,setCart] = useState([]);

  function addToCart(itemData){
    console.log(itemData)
    const newCart = [...cart]
    newCart.push(itemData)
    setCart(newCart);
  }

  const value = {cart,addToCart, itemsInCart:5}
  return(
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  )
}

export default cartContext;