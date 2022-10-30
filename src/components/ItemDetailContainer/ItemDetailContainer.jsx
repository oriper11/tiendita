import React, { useState, useEffect } from "react";
import { getItemFromAPI } from "../../mockService/mockService";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItemFromAPI().then((productos) => {
      setProduct(productos);
    });
  }, []);

  return (
    <div className="card">
      <div className="card-img">
        <img src={product.thumbnail} alt="Product img" />
      </div>
      <div className="card-detail">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="priceTag">$ {product.price}</h4>
      </div>
    </div>
  );
}

export default ItemDetailContainer;