import React, { useState } from "react";
import Button from "../Button/Button";
import "./item.css";

function Item({product}) {
  const [isFavorite, setIsFavorite] = useState(false);

 
  function handleFavorite() {
    setIsFavorite(!isFavorite);
  }

  let classButtonFavorite =
    isFavorite === true ? "card-favicon favorite" : "card-favicon";


  return (
    <div className="card">
      <button onClick={handleFavorite} className={classButtonFavorite}>
        ♥
      </button>
      <div className="card-img">
        <img src={product.thumbnail} alt="" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
      <Button>Agregar al carrito</Button>
    </div>
  );
}

export default Item;