import React from 'react';
import {Button, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Navibar() {
    
    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/About">About</Link></Nav.Link>
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