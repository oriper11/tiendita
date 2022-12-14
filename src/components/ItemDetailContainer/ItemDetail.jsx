import React, { useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Button from "../Button/Button";
import cartContext from "../../storage/CartContext";
import { Link } from "react-router-dom";


function ItemDetail({ product }) {
  const [isInCart, setIsInCart] = useState(false);
  const context = useContext(cartContext)
  const {addToCart} = useContext(cartContext);
  const navigate = useNavigate();

  function onAddToCart(count) {
    Swal.fire({
      title: `Se agregó con exito ${count} ${product.title} al carrito`,
      icon: 'success',
      timer: 1000,

    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart')
      } 
    }); 
    const itemForCart = {
      ...product,
      count,
    }
    addToCart(itemForCart);
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
      {!isInCart ? (
           <ItemCount
           text="Agregar al carrito"
           onAddToCart={onAddToCart}
           stock ={product.stock}
         />
          
      ) : (
           <div>
            <Link to="/cart">
              <Button> Ir al carrito </Button>
              </Link>
            <Link to="/">
              <Button> Seguir comprando </Button>
            </Link>
          </div>
      )}
    </div>
  );
}

export default ItemDetail;