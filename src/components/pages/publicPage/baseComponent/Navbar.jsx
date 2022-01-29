import React, { useState,useContext } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Search, XLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { logout } from '../../../../reduxStore/authentication';
import { useDispatch } from 'react-redux';
import NavbarUserSegment from './NavbarUserSegment';
import ThemeChanger from './ThemeChanger';
import {CustomNavbar} from '../../../styledComponents/NavbarIcons'

import {ThemeContext} from '../../../../contexts/ThemeContext'

function NavBar({...props}) {
    const {themeName}=useContext(ThemeContext);
    const navigate = useNavigate();
    const [clickDataList, setClickDataList] = useState(false);
    const { history } = useSelector(state => state.searchData);
    const { isLoading } = useSelector(state => state.authentication);
    const dispatch = useDispatch();
  
    return <CustomNavbar variant="light" expand='xl'>
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
                        <ThemeChanger/>
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
    </CustomNavbar >;
}
export default NavBar;






