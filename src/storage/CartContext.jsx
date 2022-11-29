import { useState, createContext } from "react";


const cartContext = createContext();

export function CartContextProvider(props) {
  const [cart,setCart] = useState([]);

  function addToCart(itemData){
    let itemFound = cart.find(itemInCart => itemInCart.id === itemData.id)
    if (itemFound){
      let newCart = cart.map( itemInCart => {
        if (itemInCart.id === itemData.id) {
          return itemInCart;
        } else {
          return itemInCart;
        }
      })
      setCart(newCart)
    } else {
      setCart((newCart) => {
      newCart.push(itemData)  
      return newCart;
      })
    }

    
  }

  function totalItemsInCart () {
    let total = 0;
    cart.forEach(itemInCart => {
      total = total + itemInCart.count;
    })
    return total;
  }

  function removeItem (itemId) {
    
    }

  function clearCart (itemId) {
    let newCart = cart.filter ((itemId) => itemId !== itemId)
    setCart(newCart);
      }
   

  const value = {cart,addToCart, totalItemsInCart,removeItem,clearCart,}
  return(
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  )
}

export default cartContext;