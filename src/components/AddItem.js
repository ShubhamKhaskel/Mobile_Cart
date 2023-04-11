import React, {useState} from 'react'

const AddItem = (props) => {
  const [productName, setProductName] = useState('');
  const [stock, setStock] = useState(0);
  const [price,  setPrice] = useState(0);
  console.log(props.showAddItem);


  return (
    <div className='add-item' style={{visibility: props.showAddItem?'visible':'hidden'}}>
      <h2>Add Item</h2>
      <form onSubmit={(e)=>{
        e.preventDefault();
        props.addItem(productName,stock,price);
        //e.style.visibility='hidden'
      }}>
        <div>
          <div>
            <label>Product Name : </label>
            <label>Stock : </label>
            <label>Price : </label>
          </div>
          <div>
            <input type='text' name='productName' onChange={(event)=>setProductName(event.target.value)}/>
            <input type='number' name='stock' onChange={(event)=>setStock(event.target.value)}/>
            <input type='number' name='price' onChange={(event)=>setPrice(event.target.value)}/>
          </div>
          </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}
export default AddItem;