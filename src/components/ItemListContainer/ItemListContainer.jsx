import React, { useState, useEffect } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemList from "./ItemList";
import getItemsFromAPI from "../productosData/productos";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getItemsFromAPI().then((itemShop) => {
      setProductsList(itemShop);
    });
  }, []);

  return (
    <div>
      <FlexWrapper>
        <ItemList productsList={productsList}/>
      </FlexWrapper>
    </div>
  );
}

export default ItemListContainer;