
import { signOut } from 'firebase/auth';
import { Button, NavDropdown, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Form, Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './fr2.png'
import './Header.css'
function Header() {
  const [user]=useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth);
  }
  return (

    // <>
    // <header>
    //   <div className="container">
    //     <nav className="navbar navbar-expand-lg navbar-light">
    //       <div className="container-fluid">

    //         <Nav.Link className="navbar-brand logo" as={Link} to="/">              
    //           <img src="images/logo.png" className="img-fluid" alt="bookworms"/>                 
    //         </Nav.Link>           


    //         {/* <a href="login.html" className="btn login_btn d-md-block d-lg-none"><i className="fa-solid fa-circle-user"></i></a>       */}

    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_menu" aria-controls="nav_menu" aria-expanded="false" aria-label="Toggle navigation">
    //           <span className=""><i className="fa-solid fa-bars"></i></span>
    //         </button>

    //         <div className="collapse navbar-collapse menu" id="nav_menu">
    //           <ul className="navbar-nav ms-auto">
    //             <li className="nav-item">
    //               <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
    //             </li>
    //             <li className="nav-item">
    //               <Nav.Link as={Link} to="/order" className="nav-link">My Order</Nav.Link>
    //             </li>
    //             <li className="nav-item">
    //               <Nav.Link as={Link} to="/deals" className="nav-link">Deals</Nav.Link>
    //             </li>
    //             <li className="nav-item">
    //               <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
    //             </li>
    //             {
    //           user ?
    //           <Button onClick={handleSignOut} as={Link} to='login' variant="success">SignOut</Button>
    //           :
    //           <Button as={Link} to='login' variant="success">Login</Button>
    //         }
    //           </ul>

    //         </div>

    //       </div>
    //     </nav>    
    //   </div>    
    // </header>
    // </>

    <Navbar bg="light" sticky='top' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
             <Nav.Link className="navbar-brand logo" as={Link} to="/">              
              <img src="images/logo.png" className="img-fluid" alt="bookworms"/>                 
            </Nav.Link> 
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  >
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>

          <div>
            <Nav
            className="d-flex me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='orders'>Order</Nav.Link>
           
            {
              user && <>
              <Nav.Link as={Link} to='addproduct'>AddBooks</Nav.Link>
              <Nav.Link as={Link} to='manageproduct'>ManageBooks</Nav.Link>
              </>
            }

            <Nav.Link as={Link} to='deals'>Deals</Nav.Link>
            <Nav.Link as={Link} to='about'>About</Nav.Link>
            {
              user ?
              <Button className='login_btn' onClick={handleSignOut} as={Link} to='login' variant="success">SignOut</Button>
              :
              <Button as={Link} to='login' variant="success">Login</Button>
            }
                     
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

/*
<Navbar bg="light" sticky='top' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
             <Nav.Link className="navbar-brand logo" as={Link} to="/">              
              <img src="images/logo.png" className="img-fluid" alt="bookworms"/>                 
            </Nav.Link> 
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  >
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>

          <div>
            <Nav
            className="d-flex me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='orders'>Order</Nav.Link>
            <Nav.Link as={Link} to='deals'>Deals</Nav.Link>
            <Nav.Link as={Link} to='about'>About</Nav.Link>
            {
              user ?
              <Button onClick={handleSignOut} as={Link} to='login' variant="success">SignOut</Button>
              :
              <Button as={Link} to='login' variant="success">Login</Button>
            }
                     
          </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    */