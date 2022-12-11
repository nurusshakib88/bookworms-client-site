import React from 'react';
import { Link } from 'react-router-dom'
import "../Contact/Contact.css";
import Message from './Message';

const Contact = () => {
  return (
    <>

      <section className='pagelink mt-0'>
        <div className='container'>
            <div className="row align-items-center">
              <div className='col-12 text-center'>
                <div className='page_text'>
                  <h1>Contact</h1>
                  <span><Link to="/">Home</Link><i className="fa-solid fa-circle"></i>Contact</span>
                </div>
              </div>
            </div>
        </div>

      </section>

      <Message></Message>


      

    </>
  )
}

export default Contact