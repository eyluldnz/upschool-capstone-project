import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieList/MovieCard';
import Paginate from './Paginate';
import { CustonP } from '../../../styledComponents/ListStyled';


export default function SearchContainer() {

    const {searchResult}=useSelector(state=>state.searchData);
    const [currentPage,setCurrentPage]=useState(1);
    const [pageCount,setPageCount]=useState(0);

    const [searchDatafiltered,setSearchDatafiltered]=useState([])

    useEffect(()=>{

        setPageCount(searchResult.length/4)

    },[searchResult]);

    useEffect(()=>{

        const newData=[];
        if(currentPage>pageCount && currentPage-pageCount<1){
            let lastDataCount=(searchResult.length%4)
            let data=searchResult.slice(searchResult.length-lastDataCount)
            setSearchDatafiltered(data);
        }
        else{
            let start=currentPage!==1?(currentPage-1)*4:0;
            for(let i=start;i<(currentPage-1)*4+4;i++){
                newData.push(searchResult[i]);
            }

            setSearchDatafiltered(newData);
        }

    },[currentPage]);


    return <div className='container'>
        <div className="row">
            <div className="col-12">
            <CustonP className='text-center'>Seacrh Results</CustonP>
                <div className="container">
                    <div className="row">
                    {searchDatafiltered.map(data=> <div className="col-3"><MovieCard movie={data}/></div>)}
                    </div>
                </div>
            
            </div>
            <div className="col-12"><Paginate setCurrentPage={setCurrentPage} pageCount={pageCount} /></div>
        </div>
        
        
    </div>;
}
