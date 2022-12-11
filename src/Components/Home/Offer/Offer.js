import React from 'react'
import { NavLink } from 'react-router-dom';

const Offer = () => {
  return (
    <>


    <section className="offer mt-3 mb-0">
      <div className="container">
        <div className="row justfy-content-center align-items-center">
          <div className="col-md-6 col-sm-7 align-self-center">
            <div className="offer_text text-center">
              <h1>40% OFF</h1>
              <h3>Flat Discount on All Books</h3>
              <p>Terms & Condition Apply*</p>
              <NavLink to="/shop" className="shop_btn">Shop Now</NavLink>
            </div>
          </div>          
          <div className="col-md-6 col-sm-5 align-self-center text-center">
            <div className="offer_img">
              <img src="images/banner2.png" className="img-fluid w-" alt="bookworms"/>
            </div>
          </div>          
        </div>
      </div>
    </section>

    <section className="delivery py-0">
      
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="box text-center">
              <div className="box_img text-center">
                <i className="fa-solid fa-sack-dollar"></i>
              </div>
              <div className="box_text">
                <h5>Money Back Gurantee</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima alias velit cupiditate.</p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box text-center">
              <div className="box_img text-center">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div className="box_text">
                <h5>Free Deliverye</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aspernatur alias totam.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box text-center">
              <div className="box_img text-center">
                <i className="fa-solid fa-headset"></i>
              </div>
              <div className="box_text">
                <h5>Always Support</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam veritatis quod doloribus.</p>
              </div>
              
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="box text-center">
              <div className="box_img text-center">
                <i className="fa-solid fa-shield-halved"></i>
              </div>
              <div className="box_text">
                <h5>Secure payment</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed natus sit voluptatum eaque.</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Offer