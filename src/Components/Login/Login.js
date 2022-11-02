/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Footer from '../Footer/Footer';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    const emailElement = useRef('');
    const passwordElement = useRef('');
    const navigate =useNavigate();
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if(user){
        navigate(from, { replace: true });
      }

    const focusInput = event => {
        event.preventDefault();
        const email = emailElement.current.value;
        const password = passwordElement.current.value;
        console.log(email,password)
        signInWithEmailAndPassword(email, password)

    };

    const nevigateRegister = event =>{
        navigate('/register')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success'>Please Login</h2>           

            <Form onSubmit={focusInput}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailElement} type="email" placeholder="Enter email" required/>
                  
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordElement} type="password" placeholder="Password" required />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button onClick={focusInput} variant="success" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Fresh Valley ?<Link to="/register" className='text-danger pe-auto text-decoration-none' onClick={nevigateRegister}>Please Register</Link></p>
                <SocialLogin></SocialLogin>
                <Footer></Footer>
        </div>
    );
};

export default Login;