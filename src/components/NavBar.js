import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" style={{ marginLeft: "1em" }}>100DOC</Navbar.Brand>
            <Container fluid className="justify-content-end">
                <Nav>
                    <NavLink to="/today" className="nav-link">Today</NavLink>
                    <NavLink to="/archive" className="nav-link">Archive</NavLink>
                    <NavLink to="/blog" className="nav-link">Blog</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
