import React from 'react'
import Product from './Product';

const ProductList = (props) => {
  return (
    props.productList.length>0 ?
    <div className='products-list'>
      {props.productList.map((product,i)=> {
          return <Product product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} 
                  removeItem={props.removeItem} index={i}/>
      })}
    </div>
    :<h1>
      Add Products to the Cart
    </h1>
  )
}

export default ProductList
