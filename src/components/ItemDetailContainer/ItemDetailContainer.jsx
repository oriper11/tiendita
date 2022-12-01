import React, { useState, useEffect } from "react";
import { getSingleItemFromAPI } from "../../service/firebase";

import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./itemdetailcontainer.css";

import Loader from "../Loader/Loader";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackMsg,setfeedbackMsg]=useState(null);

  let id = useParams().id;

  useEffect(() => {
    getSingleItemFromAPI(id)
      .then((itemsDB) => {
        console.log(itemsDB);
        setProduct(itemsDB);
      })

      .catch((error) => {
        setfeedbackMsg(`Error:${error.message}`)
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading)
    return (
     
        <Loader color="blueviolet" size={150} />
     
    );

  return (
    <div>
  { feedbackMsg ? (
  <span style={{backgroundColor: "white"}}>{feedbackMsg}</span>
  ) : (
  <ItemDetail product={product}></ItemDetail>
)}
  </div>
);
}
export default ItemDetailContainer;