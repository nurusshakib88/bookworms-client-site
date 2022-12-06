import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Products from './Home/Products/Products'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
    <div className="page">
      <div className="container">
        <div className="row">
          <span><Link to="/"><i className="fa-solid fa-house"></i></Link> / Shop</span>
        </div>
      </div>
    </div>
    <Products></Products>
    </>
  )
}

export default Shop