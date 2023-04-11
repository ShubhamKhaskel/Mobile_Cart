import React from 'react'

const Footer = (props) => {
  let total = 0;
  props.productList.forEach(product => {
    total += product.quantity*product.price;
 });
  return (
    <div className='footer'>
        <span class="input-group-text">Total: {total}</span>
        <button className="btn btn-success" onClick={props.resetQuantity}>Reset</button>
    </div>
  )
}

export default Footer



