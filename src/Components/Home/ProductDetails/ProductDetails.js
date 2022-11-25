import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams();
    const [product,setProduct]=useState({});

    useEffect(() => {
      
        const url = `http://localhost:5000/product/${productId}`;
        

        fetch(url)
        .then(res=> res.json())
        .then(data => setProduct(data));
    }, [])
    
    return (
        <div>
            <h1>ProductDetails</h1>
            <h4>product id::{product.name}</h4>
            <Link to='/checkout'>
            <Button variant="success" type="submit">
                   Proceed Checkout
                </Button>
            </Link>
        </div>
    );
};

export default ProductDetails;