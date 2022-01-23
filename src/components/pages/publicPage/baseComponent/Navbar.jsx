import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

 function NavBar(){
    const navigate=useNavigate();
    
    return <Navbar variant="dark" bg="dark" expand="lg">
    <Container fluid>
        <Navbar.Brand>UpSchool Capstone</Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse id="navbar-dark-example">
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Movies"
                    menuVariant="dark"
                >
                    <NavDropdown.Item onClick={()=>navigate("/profile")}>Populaar/Top Rated</NavDropdown.Item>
                    
                    
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Container>
  </Navbar>;
}
export default NavBar;
