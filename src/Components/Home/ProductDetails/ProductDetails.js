import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {productId}=useParams()
    return (
        <div>
            <h1>ProductDetails</h1>
            <h4>product id::{productId}</h4>
            <Link to='/checkout'>
            <Button variant="success" type="submit">
                   Proceed Checkout
                </Button>
            </Link>
        </div>
    );
};

export default ProductDetails;