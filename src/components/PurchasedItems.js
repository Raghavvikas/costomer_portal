import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import ProductList from './ProductList';

const PurchasedItems = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        document.body.style.backgroundImage = "none";
        props.getProductList();
    },[]);



    useEffect(()=>{
        let list = props.getProductList.map((item,index) => {
            return <div key={index} className='col col-md-4 col-lg-4'>
                <ProductList {...item}/>
            </div>
        })
        setItems(list);
    },[props.productList])

  return (
    <>
     <Navigation />
     <div className='container'>
        <div className='row'>
            {items}
        </div>
        </div> 
        <Footer/>
    </>
  )
}

export default PurchasedItems
