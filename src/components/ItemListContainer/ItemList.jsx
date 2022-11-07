import React from 'react'
import FlexWrapper from '../FlexWrapper/Flexwrapper';
import Item from "../Item/Item";
import "./itemlistcontainer.css"

function ItemList (props) {
  return (
    <div>
<FlexWrapper>
    {props.productsList.map((product) => (
      <Item
        key={product.id}
        product={product}

      />  
 
    ))}
</FlexWrapper> 
    </div>    
  )
}

export default ItemList;