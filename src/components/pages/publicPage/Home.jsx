import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import TrendMovie from './MovieList/TrendMovie';
import DiscoverMovie from './MovieList/DiscoverMovie';
import SearchForm from './SearchForm';
import SearchContainer from '../publicPage/searchComponents/SearchContainer'
import { useSelector } from 'react-redux';
import {CustonP} from '../../styledComponents/ListStyled'


export default function Home() {

    const { searchResult } = useSelector(state => state.searchData);

    const APIKEY = "api_key=38c02880f9f69c49ba83e5b023f7dc67";



    return (

        <div className="container">
            <div className="row">
                <div className='col-12'>
                    <SearchForm />
                </div>
                {
                    searchResult.length > 0 ? <SearchContainer /> :
                        <>  <div className="col-12 my-5" style={{ overflowX: 'overlay' }}>
                           <CustonP className='text-center'>Discover Movies</CustonP>
                            <DiscoverMovie />
                        </div>
                            <div className="col-12" >
                            <CustonP className='text-center'>Trend Movies</CustonP>
                                <TrendMovie />
                            </div>
                        </>


                }

            </div>
            
        </div>

    )
}
