import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI from "../../mockService/mockService";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getItemsFromAPI().then((productos) => {
      setProductsList(productos);
    });
  }, []);

  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;