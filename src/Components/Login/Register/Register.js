import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Footer from '../../Footer/Footer';
// import auth from '../../../firebase.init';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const emailElement = useRef('');
    const passwordElement = useRef('');
    const navigate =useNavigate();

    const focusInput = event => {
        event.preventDefault();
        const email = emailElement.current.value;
        const password = passwordElement.current.value;

        console.log(email,password)
        createUserWithEmailAndPassword(email,password);
    };

    const nevigateLogin = event =>{
        navigate('/login')
    }


    return (
    <div className='container w-50 mx-auto'>
        <form onSubmit={focusInput} >
        <div className="form">
        <div className="form-body">
        <h4 style={{textAlign:'center'}}>Create account</h4>
            <div className="username">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" type="text" id="firstName" placeholder="First Name" required/>
            </div>
            <div className="lastname">
                <label className="form__label" for="lastName">Last Name </label>
                <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName" required/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input ref={emailElement} type="email" id="email" className="form__input" placeholder="Email" required/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" type="password"  id="password" placeholder="Password" required/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password </label>
                <input ref={passwordElement} className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
            </div>
        </div>
        <Button className='d-flex' variant="success" type="submit" style={{alignItem: 'center'}}>
                    Continue</Button>
                    <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' onClick={nevigateLogin} to='/login' style={{color:'#157347'}}>Sign in</Link></p>
       
        </div> 
        <SocialLogin></SocialLogin>
        </form>
        <Footer></Footer>
    </div>     
    );
};

export default Register;