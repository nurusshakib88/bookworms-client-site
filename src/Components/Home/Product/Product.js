import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, img, description, price} = product;
    const  navigate=useNavigate();
    const navigateToProduct = id =>{
        navigate(`/product/${_id}`);
    }
    return (
        
           <div className='card-container' >          
            <div>
                <div className='product' >
                    <img className='w-100' src={product.img} alt="" />
                    <h5>{product.name}</h5>
                    <h4 className="color productPrice me-auto">৳ {product.price}</h4>                   
                    <button onClick={()=>navigateToProduct(product._id)} className='btn btn-success'>Buy Now</button>
                 </div>
            </div>
           </div>
        
    );
};

export default Product;



// import React from 'react';
// // import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import './Product.css'

// const Product = ({product}) => {
//     const {name,img,description,price}=product;
//     return (
//         <div className='product'>
//         <img className='w-100' src={img} alt="" />
//         <h2>{name}</h2>
//         <p>Price: {price}</p>
//         <p><small>{description}</small></p>
//         <button className='btn btn-primary'>Book: {name}</button>
//     </div>
    
//     );
// };

// export default Product;

