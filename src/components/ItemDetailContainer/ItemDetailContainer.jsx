import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../service/firebase";

import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./itemdetailcontainer.css";

import Loader from "../Loader/Loader";
import FlexWrapper from "../FlexWrapper/Flexwrapper";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let id = useParams().id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        setProduct(itemsDB);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (
      <FlexWrapper>
        <Loader color="blueviolet" size={500} />
      </FlexWrapper>
    );

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;