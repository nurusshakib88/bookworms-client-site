
import { signOut } from 'firebase/auth';
import { Button, NavDropdown } from 'react-bootstrap';
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

    <Navbar bg="light" sticky='top' expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><h5>Fresh Valley</h5></Navbar.Brand>
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
  );
}

export default Header;