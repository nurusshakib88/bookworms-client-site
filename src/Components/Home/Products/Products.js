import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Products.css"
import { HashLoader } from 'react-spinners';

const Products = () => {

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

   const [loading,setLoading]=useState(false)
   useEffect(() => {
     setLoading(true)
     setTimeout(()=>{
      setLoading(false)
     },2000)
   }, [])
   
    return (
      <div>
        <div className='carditem'>
              <div >
            <>
            {
              loading?
              <div className='Spinner'>
                <HashLoader  color={'#157347'} loading={loading}  size={150} aria-label="Loading Spinner" />
              </div>
              :
              <div className='products-container '>
              {
                      products.map(product => <Product key={product._id} product={product}></Product>)
                    }
                 
                 </div>
            }
            </>
        </div>
        
        </div>
      </div>
       
    );
};

export default Products;