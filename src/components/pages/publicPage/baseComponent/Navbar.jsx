import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Search, XLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux';
import { logout } from '../../../../reduxStore/authentication';
import { useDispatch } from 'react-redux';

function NavBar() {
    const navigate = useNavigate();
    const [clickDataList, setClickDataList] = useState(false);
    const { history } = useSelector(state => state.searchData);
    const { isLoading } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    return <Navbar variant="dark" bg="dark" expand='xl'>
        <Container >

            <Navbar.Brand onClick={() => navigate("/")}>UpSchool Capstone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Movies"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item onClick={() => navigate("/popular")}>Popular Movies</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate("/toprated")}>Top Rated Movies</NavDropdown.Item>


                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

            <Container className="mx-5">
                <Navbar.Collapse style={{ float: 'right' }}>
                    {
                        isLoading ? <Link to='/profile' className='mx-5'>
                            <Image style={{ width: 50, borderRadius: 50, }} src="https://joeschmoe.io/api/v1/random" />
                        </Link> : null
                    }

                    <Nav className='mx-5'>
                        <NavDropdown
                            id="nav-dropdown-dark-example"
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






