import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import TrendMovie from './MovieList/TrendMovie';
import DiscoverMovie from './MovieList/DiscoverMovie';

export default function Home() {

    const APIKEY="api_key=38c02880f9f69c49ba83e5b023f7dc67"

    

    const navigate=useNavigate()
    return (
        <div>
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand>HomePage</Navbar.Brand>
                    <Navbar.Toggle  />
                    <Navbar.Collapse id="navbar-dark-example">
                        <Nav>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title="Dropdown"
                                menuVariant="dark"
                            >
                                <NavDropdown.Item onClick={()=>navigate("/profile")}>Profile</NavDropdown.Item>
                                
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5" style={{overflowX:'overlay'}}>
                    <DiscoverMovie/>
                    </div>
                    <div className="col-12" >
                    <TrendMovie/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}
