import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Button from "../Button/Button";
import cartContext from "../../storage/CartContext";


function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const context = useContext(cartContext)
  const {addToCart, cart} = useContext(cartContext);
  const navigate = useNavigate();

  function onAddToCart(count) {
    Swal.fire({
      title: `Agregamos ${count} ${product.title} al carrito`,
      text: '¿Deseas ir al carrito?',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart')
      }
    });    
    const itemForCart = {
      ...product,
      count,
    }
    addToCart();
    setIsInCart(true);
  }

  return (
    <div className="card-detail">
          <strong>{context.itemsInCart}</strong>

      <div className="card-detail_img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail_detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      {isInCart ? (
        <div> 
        <Button> Volver al listado </Button>
        </div>
          
      ) : (
        <ItemCount
          text="Agregar al carrito"
          onAddToCart={onAddToCart}
          stock={product.stock}
          />   
      )}
    </div>
  );
}

export default ItemDetail;