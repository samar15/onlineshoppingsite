import {React, Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
              
                <Navbar.Brand href="/">Shopping</Navbar.Brand>
    
            <Nav className="mr-auto">
              <Link to={"about"} className = "nav-link">About</Link>
              <Link to={"products"} className = "nav-link">Products</Link>
              <Link to={"contact"} className = "nav-link">Contact</Link>
              <Link to = {"login"} className = "nav-link" > Login</Link>
              <Link to={"register"} className = "nav-link">Register</Link>
            </Nav>
          
          </Navbar>
            )
    }
}

