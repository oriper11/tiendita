import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import getItemsFromAPI, { getItemsFromAPIByCategory} from "../../mockService/mockService";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";

function ItemListContainer() {
  const [productsList, setProductsList] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid) {
      getItemsFromAPIByCategory(categoryid).then((productos) => {
        setProductsList(productos);
      });
    } else {
      getItemsFromAPI().then((productos) => {
        setProductsList(productos);
      });
    }
  }, [categoryid]);

  return <ItemList productsList={productsList} />;
}

export default ItemListContainer;