import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Search, XLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { logout } from '../../../../reduxStore/authentication';
import { useDispatch } from 'react-redux';
import NavbarUserSegment from './NavbarUserSegment';

function NavBar() {
    const navigate = useNavigate();
    const [clickDataList, setClickDataList] = useState(false);
    const { history } = useSelector(state => state.searchData);
    const { isLoading } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    return <Navbar variant="light" bg="light" expand='xl'>
        <Container >

            <Navbar.Brand onClick={() => navigate("/")}>UpSchool Capstone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="navbar-light-example">
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Movies"
                        menuVariant="light"
                    >
                        <NavDropdown.Item onClick={() => navigate("/popular")}>Popular Movies</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/top_rated")}>Top Rated Movies</NavDropdown.Item>


                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

            <Container >
                <Navbar.Collapse style={{ float: 'right' }}>
                    {
                        isLoading ?<NavbarUserSegment/>: null
                    }

                    <Nav className='mx-3'>
                        <NavDropdown
                            id="nav-dropdown-light-example"
                            title={clickDataList ? <XLg /> : <Search />}
                            menuVariant="dark"
                            onClick={() => setClickDataList(prev => !prev)}
                        >
                            {history.map(item => <NavDropdown.Item >{item}</NavDropdown.Item>)}



                        </NavDropdown>
                        {
                            isLoading ? <button onClick={() => {
                                dispatch(logout());
                 } }>
                                Logout
                            </button> : null
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Container>
    </Navbar >;
}
export default NavBar;






