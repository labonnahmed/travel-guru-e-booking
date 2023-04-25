import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css'

const NavBar = () => {
    return (
        <Navbar>  
            <Container>
                <NavLink to="/">
                    <img 
                        src={logo} 
                        alt=""
                        width="120"
                        height="50"
                        className="d-inline-block align-top" />
                </NavLink>
                <Form style={{marginLeft:'50px'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-search search-icon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>
                    <input type="search" name="" id="" className=' nav-search glyphicon glyphicon-search' placeholder='Search your Destination...'/>
                </Form>
                <Nav className="ms-auto">
                    <NavLink to="/" className='nav-link text-white'>Home</NavLink>
                    <NavLink to="destination" className='nav-link text-white'>Destination</NavLink>
                    <NavLink to="blog" className='nav-link text-white'>Blog</NavLink>
                    <NavLink to="contact" className='nav-link text-white'>Contact</NavLink>
                    <Link to='/login'>
                        <Button variant='warning' className='ms-3'>Login</Button>
                    </Link>
                </Nav>
            </Container>  
        </Navbar>
    );
};

export default NavBar;