import React from 'react';
import {RxCrossCircled} from 'react-icons/rx';

const Product = (props) => {
  return (
    <div class="card">
      <div className='image-container'>
        <img src={props.product.img} class="product-image" alt={props.product.name}/>
      </div>
      <div class="card-body">
        <div class="card-title">
          <h5>
            {props.product.name}
          </h5>
          <button onClick={()=>{props.removeItem(props.index)}}>
            <RxCrossCircled/>
          </button>
        </div>
        <div class="card-text">
          <span>Unit Price : </span>{props.product.price}
        </div>
        <div className='actions'>
          <span>Quantity : </span>
          <button type="button" className="btn btn-success" onClick={()=>props.decrementQuantity(props.index)} disabled={props.product.quantity===0}>-</button>
          <button type="button" className="btn btn-secondary">{props.product.quantity}</button>
          <button type="button" className="btn btn-danger" onClick={()=>props.incrementQuantity(props.index)} disabled={props.product.quantity===props.product.stock}>+</button>
        </div>
        <div>
          <span>Total : </span>{props.product.quantity*props.product.price}
        </div>
      </div>
    </div>
    
  )
}

export default Product
