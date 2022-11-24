import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import cartContext from "../../storage/CartContext";
import {  useNavigate } from "react-router-dom";
import { Swal } from "sweetalert2";
import Button from "../Button/Button";


function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);

  const navigate = useNavigate();
  const { addToCart } = useContext(cartContext);

  function onAddToCart(count) {
    Swal.fire({
      title: `Agregadas ${count} unidades al Carrito`,
      text: "¿Deseas ir al carrito?",
      icon: "success",
      confirmButtonText: "Ir al carrito",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/cart");
      }
    });
    
    const itemForCart = {
      ...product,
      count,
    };

    addToCart(itemForCart);
    setIsInCart(true);
  }


  return (
    <div className="card-detail">
      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {!isInCart ? (
      <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
          />
      ) : (
        <div>
        <Button>Ir al Carrito</Button>
        <Button>Seguir comprando</Button> 
 
        </div>
      )}
    </div>
  );
}

export default ItemDetail;