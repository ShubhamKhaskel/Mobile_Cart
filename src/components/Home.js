import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList';
import React,{useState} from 'react';
import AddItem from './AddItem';
import {HiPlusCircle} from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  
    const initialProductList=[
        {
          img: 'image1.jpg',
          price: 99999,
          name: "Iphone 10S",
          quantity: 0,
          stock: 10,
        },
        {
          img: 'redmi10_pro_max.jpg',
          price: 999,
          name: "Redmi 10S Max",
          quantity: 0,
          stock: 10,
        },
        {
          img: 'redmi10_pro_max.jpg',
          price: 999,
          name: "Redmi 10S Max",
          quantity: 0,
          stock: 10,
        },
        {
          img: 'image1.jpg',
          price: 99999,
          name: "Iphone 10S",
          quantity: 0,
          stock: 10,
        },
        {
          img: 'image1.jpg',
          price: 99999,
          name: "Iphone 10S",
          quantity: 0,
          stock: 10,
        },
        {
          img: 'image1.jpg',
          price: 99999,
          name: "Iphone 10S",
          quantity: 0,
          stock: 10,
        }
      ];
    
      let [productList,setProductList]=useState(initialProductList);
      const [showAddItem, setShowAddItem] = useState(false);
      
      const navigate = useNavigate(); 
    
      const resetQuantity=()=>{
        const newProductList= [...productList];
        newProductList.map((products)=>
        {
          products.quantity=0;
        })
        setProductList(newProductList);
      }
    
      const incrementQuantity =(index)=>
      {
        const prevState = [...productList];
        prevState[index].quantity++;
        setProductList(prevState);
      }
    
      const decrementQuantity =(index)=>
      {
        const prevState = [...productList];
        prevState[index].quantity--;
        setProductList(prevState);
      }
    
      const removeItem=(index)=>{
        let newProductList=[...productList];
        newProductList.splice(index,1);                //splice (deleting index,how many to delete)
        setProductList(newProductList);
      }
    
      const addItem=(name1,stock,price)=>{
        let newProductList=[...productList];
        newProductList.push({
          img: 'image2.jpg',
          price: price,
          name: name1,
          quantity: 0,
          stock: stock,
        })
        setProductList(newProductList);
      }
    return (
        <main className=''>
            <Navbar/>
            <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
            <AddItem addItem={addItem} showAddItem={showAddItem} />
            <Footer  productList={productList} resetQuantity={resetQuantity}/>
            <button onClick={()=>setShowAddItem(!showAddItem)} className='add-button'><HiPlusCircle/></button>
        </main>
    )
}

export default Home
