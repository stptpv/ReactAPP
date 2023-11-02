import React from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap';
import {Link, ProtectedLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Navibar() {
    const email = useSelector(state => state.user.email);
    let isAuthenticated = false;
if(email!==null){
    isAuthenticated=true
}
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {isAuthenticated ? <Nav.Link><Link to="/Home">Home</Link></Nav.Link> : null}
                {isAuthenticated ? <Nav.Link><Link to="/About">About</Link></Nav.Link> : null}
                    <Nav.Link>Blog's Main Topic 1</Nav.Link>
                    <Nav.Link>Blog's Main Topic 1</Nav.Link>
                    <Nav.Link>Blog's Main Topic 1</Nav.Link>
                    <Nav.Link>Associated blog's</Nav.Link>
                    <Nav.Link>RSS</Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}