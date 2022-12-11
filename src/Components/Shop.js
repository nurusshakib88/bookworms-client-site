import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Products from './Home/Products/Products'
import { Link } from 'react-router-dom'

const Shop = () => {
  return (
    <>
    
    <section className='pagelink mt-0 mb-5'>
        <div className='container'>
            <div className="row align-items-center">
              <div className='col-12 text-center'>
                <div className='page_text'>
                  <h1>Shop</h1>
                  <span><Link to="/">Home</Link><i className="fa-solid fa-circle"></i>Shop</span>
                </div>
              </div>
            </div>
        </div>

      </section>

      <div className='sorting mb-md-4 mb-3'>
      <div className='container'>
          <div className='row justify-content-end'>
            <div className=' col-lg-3 col-sm-7 col-10'>
              <div className="row justify-content-end">
                <div className="col-xl-3 col-lg-4 col-md-3 col-sm-3 col-4 align-self-center c_font">Sort By</div>
                  <div className="col-xl-7 col-md-8 col-8 align-self-center">
                    <select className="form-select s_form" aria-label="Default select example">
                      <option selected>Default</option>
                      <option value="1">Price Low to High</option>
                      <option value="2">Price High to Low</option>
                      <option value="3">Rating High to Low</option>
                      <option value="4">Rating Low to High</option>
                    </select>
                  </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    <Products></Products>
    </>
  )
}

export default Shop