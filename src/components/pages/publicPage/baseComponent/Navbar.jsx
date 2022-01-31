import React, { useState, useContext } from 'react';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Search, XLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { logout } from '../../../../reduxStore/authentication';
import { useDispatch } from 'react-redux';
import NavbarUserSegment from './NavbarUserSegment';
import ThemeChanger from './ThemeChanger';
import { CustomNavbar, CustamNavbarDrop, CustamNavbarDropItem, CustomSearch, CustomX,CustomToggle } from '../../../styledComponents/NavbarIcons'
import {DivButtons} from '../../../styledComponents/DivStyledColor'
import { ThemeContext } from '../../../../contexts/ThemeContext'



function NavBar({ ...props }) {
    const { themeName } = useContext(ThemeContext);
    const navigate = useNavigate();
    const [clickDataList, setClickDataList] = useState(false);
    const { history } = useSelector(state => state.searchData);
    const { isLoading } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    return <CustomNavbar variant="light" expand='xl'>
        <Container >

            <Navbar.Brand onClick={() => navigate("/")}> <Image style={{ width: 100, borderRadius: 20, }} src="https://i.dlpng.com/static/png/6639915_preview.png" /></Navbar.Brand>
            <CustomToggle />
            <Navbar.Collapse id="navbar-light-example">
                <Nav>
                    <CustamNavbarDrop
                        align={{ lg: 'start' }}
                        title="Movies"

                    >
                        <CustamNavbarDropItem onClick={() => {
                            navigate("/popular")}}>Popular Movies</CustamNavbarDropItem>
                        <CustamNavbarDropItem onClick={() => navigate("/top_rated")}>Top Rated Movies</CustamNavbarDropItem>


                    </CustamNavbarDrop>
                </Nav>
            </Navbar.Collapse>

            <Container >
                <Navbar.Collapse style={{ float: 'right' }}>
                    {
                        isLoading ? <NavbarUserSegment /> : null
                    }

                    <Nav className='mx-1'>
                        <div className="container">
                            <div className="row">
                                <div className="col-2 mt-2">
                                    <ThemeChanger />
                                </div>
                                
                                <div className="col-2 me-2 ">
                                {
                                        isLoading ?
                                    <NavDropdown
                                        className='pb-2'
                                        id="nav-dropdown-light-example"
                                        title={clickDataList ? <CustomX /> : <CustomSearch />}
                                        menuVariant="dark"
                                        onClick={() => setClickDataList(prev => !prev)}
                                    >
                                        {history.map(item => <NavDropdown.Item >{item}</NavDropdown.Item>)}



                                    </NavDropdown>
                                    : null
                                }
                                </div>
                                <div className="col-6 ms-3 pt-1 mt-1">
                                    {
                                        isLoading ? <DivButtons onClick={() => {
                                            dispatch(logout());
                                        }}>
                                            Logout
                                        </DivButtons> : null
                                    }
                                </div>
                            </div>
                        </div>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Container>
    </CustomNavbar >;
}
export default NavBar;






