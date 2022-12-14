import React from "react";
import FlexWrapper from "../FlexWrapper/Flexwrapper";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";

function ItemList(props) {
  let emptyArray = props.productsList.length === 0;

  return (
    <FlexWrapper>
      {emptyArray ? 
        props.feedbackMsg ? 
          <span style={{ backgroundColor: "pink" }}>{props.feedbackMsg}</span>
          :
          <Loader color="blueviolet" size={150} />
      : 
        props.productsList.map((product) => (
          <Item key={product.id} product={product} />
        ))}
    </FlexWrapper>
  );
}

export default ItemList;