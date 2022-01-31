import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addResults,addHistory} from '../../../reduxStore/searchDataReducer'

export default function SearchForm() {

    const [searchValue,setSearchValue]=useState("");
    const dispatch=useDispatch();

    const handleSearch=(e)=>{
        e.preventDefault();
        if(searchValue!==""){
            setTimeout(()=>{
                fetch("https://api.themoviedb.org/3/search/movie?api_key=38c02880f9f69c49ba83e5b023f7dc67&query="+ searchValue.toString()).
                then(res=>res.json()).
                then(data=>{
                    dispatch(addResults(data?.results));
                   
                })
                setTimeout(()=>dispatch(addHistory(searchValue)),7000);
            },3000)
        }
    }

 

    useEffect(()=>{

        if(searchValue==="" || searchValue===" "){
            dispatch(addResults([]));
        }
    },[searchValue])


    return <div className="my-3">
        <Form onSubmit={handleSearch}>
            <Form.Group className="mb-3" >
                <Form.Control
                    type="text"
                    id="inputSearch"
                    placeholder='Search'
                    onChange={(e)=>setSearchValue(e.target.value)}
                />
            </Form.Group>

        </Form>


    </div>;
}
