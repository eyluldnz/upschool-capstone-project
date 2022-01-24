import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import GenreContainer from './GenreContainer';
import MovieCard from '../MovieList/MovieCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SortFilterPage() {

  const globalLocation = useLocation();
  const [location, setLocation] = useState("");
  const [movies, setMovies] = useState([]);
  const [loadCounter, setLoadCounter] = useState(1);
  const [lastLoadPage, setLastLoadPage] = useState(0);
  const [filter, setFilter] = useState({
    sort: [

    ],
    filter: [
      //12, 14
    ],
    dateFilter:{
      
    }
     
    
  })

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie${globalLocation.pathname}?api_key=38c02880f9f69c49ba83e5b023f7dc67`).
      then(res => res.json()).
      then(data => {
        setMovies(movies.concat(data?.results))
      });

  }, []);
  useEffect(() => {

    let fetchedData = [];

    fetch(`https://api.themoviedb.org/3/movie${globalLocation.pathname}?api_key=38c02880f9f69c49ba83e5b023f7dc67&page=${loadCounter}`).
      then(res => res.json()).
      then(data => {
        if (filter.filter.length > 0) {
          filteredData(movies.concat(data?.results));
        }
        else {
          setMovies(movies.concat(data?.results));
        }

      });




  }, [loadCounter]);

  const handleSelect = (e) => {

    setFilter({...filter,filter:[12,14]})

  }
  const handlerDate=(date,type)=>{
    if(type==='start'){
      setFilter({...filter,dateFilter:{ ...filter.dateFilter,start:date.toLocaleDateString().replace(".","/")}})
    }
    else if(type==='end'){
      setFilter({...filter,dateFilter:{ ...filter.dateFilter,end:date.toLocaleDateString().replace(".","/")}})
    }
    

  }

  const filteredData = (fecthedMovie = movies) => {
    let newMovies = [];
    if (filter.filter.length > 0) {


      for (let j = 0; j < fecthedMovie.length; j++) {
        let isAll = false;
        for (let i = 0; i < filter.filter.length; i++) {
          if (fecthedMovie[j].genre_ids.includes(filter.filter[i])) {
            isAll = true;
          }
          else {
            isAll = false;
            break;
          }
        }
        if (isAll) {
          newMovies.push(fecthedMovie[j])
        }

      }
      
    }
    if(filter.dateFilter.end && filter.dateFilter.start){

      newMovies=newMovies.filter(movie=>movie.release_date?.split('-').reverse().join('/')>filter.dateFilter.start && movie.release_date?.split('-').reverse().join('/')<=filter.dateFilter.end)

      //movie["release_date"]?.split('-').reverse().join('/')
      
    }
    else{
      newMovies=movies;
    }
    setMovies([...newMovies])

  }

  const searchHandler = () => {
    filteredData();
  }

  console.log(movies)
  return <div>
    <div className="container">
      <div className="row">
        <div className="col-3 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <select className="form-select" onChange={handleSelect}>
                  <option selected>Open this select menu</option>
                  <option value="asc">{"A->Z"}</option>
                  <option value="desc">{"Z->A"}</option>
                  <option value="ascByPop">{"Asc By Popular"}</option>
                  <option value="desc">{"Des By Popular"}</option>
                  <option value="desc">{"Asc by Release"}</option>
                  <option value="desc">{"Desc by Release"}</option>

                </select>
              </div>
              <div className="col-12">Filter By
              <DatePicker  onChange={(date) => handlerDate(date,"start")} />
              <DatePicker  onChange={(date) => handlerDate(date,"end")} />
                <GenreContainer />
              </div>
              <button onClick={searchHandler}>Search</button>
            </div>
          </div>
        </div>
        <div className="col-9 bg-light" >
          <div className="container" style={{ overflowX: 'overlay', height: 750 }}>
            <div className="row">
              {
                movies.map((data, indis) => <div className="col"><MovieCard movie={data} widthCard={150} /></div>)
              }
            </div>

          </div>
          <button onClick={() => setLoadCounter(prev => prev + 1)}>Load More</button>
        </div>

      </div>
    </div>


  </div>;
}
