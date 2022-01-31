import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GenreContainer from './GenreContainer';
import MovieCard from '../MovieList/MovieCard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {StyledDiv,DivButtons} from '../../../styledComponents/DivStyledColor';
import {CustonP} from '../../../styledComponents/ListStyled'

export default function SortFilterPage() {

  const globalLocation = useLocation();
  const [movies, setMovies] = useState([]);
  const [loadCounter, setLoadCounter] = useState(1);
  const [filter, setFilter] = useState({
    sort: [

    ],
    filterGenre: [

    ],
    dateFilter: {

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

    fetch(`https://api.themoviedb.org/3/movie${globalLocation.pathname}?api_key=38c02880f9f69c49ba83e5b023f7dc67&page=${loadCounter}`).
      then(res => res.json()).
      then(data => {
        if (filter.filterGenre.length > 0 || filter.sort[0] !== undefined || filter.dateFilter.end !== undefined || filter.dateFilter.start !== undefined) {
          filteredData(movies.concat(data?.results));
        }
        else {
          setMovies(movies.concat(data?.results));
        }

      });

  }, [loadCounter]);

  const handleSelect = (e) => {

    setFilter({ ...filter, sort: e.target.value })

  }
  const handlerDate = (date, type) => {
    if (type === 'start') {
      setFilter({ ...filter, dateFilter: { ...filter.dateFilter, start: date.toLocaleDateString().replace(".", "/") } })
    }
    else if (type === 'end') {
      setFilter({ ...filter, dateFilter: { ...filter.dateFilter, end: date.toLocaleDateString().replace(".", "/") } })
    }


  }

  const filteredData = (fecthedMovie = movies) => {
    let newMovies = [];
    if (filter.filterGenre.length > 0) {


      for (let j = 0; j < fecthedMovie.length; j++) {
        let isAll = false;
        for (let i = 0; i < filter.filterGenre.length; i++) {
          if (fecthedMovie[j].genre_ids.includes(filter.filterGenre[i])) {
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
    if (filter.dateFilter.end && filter.dateFilter.start) {

      newMovies = newMovies.filter(movie => movie.release_date?.split('-').reverse().join('/') > filter.dateFilter.start && movie.release_date?.split('-').reverse().join('/') <= filter.dateFilter.end)

    }

    if (filter.sort[0] !== null) {

      newMovies = sortedMovie(newMovies.length > 0 ? newMovies : fecthedMovie, Number(filter.sort[0]))
    }
    else {
      newMovies = movies;
    }
    setMovies([...newMovies])

  }

  const sortedMovie = (movies, sortType) => {
    switch (sortType) {
      case 1:
        return movies.sort((a, b) => a["original_title"].localeCompare(b["original_title"]));
      case 2:
        return movies.sort((a, b) => a["original_title"].localeCompare(b["original_title"])).reverse();
      case 3:
        return movies.sort((a, b) => {
          return new Number(a["popularity"]) > new Number(b["popularity"]) ? -1 : 1

        }).reverse().reverse();
      case 4:
        return  movies.sort((a, b) => {
          return new Number(a["popularity"]) > new Number(b["popularity"]) ? -1 : 1

        }).reverse();
      case 5:
        return movies.sort((a, b) => {
          return new Date(a["release_date"]) > new Date(b["release_date"]) ? -1 : 1

        }).reverse();

      case 6:
        return movies.sort((a, b) => {
          return new Date(a["release_date"]) > new Date(b["release_date"]) ? -1 : 1

        }).reverse().reverse();

      default: return movies;
    }

  }

  const searchHandler = () => {
    fetch(`https://api.themoviedb.org/3/movie${globalLocation.pathname}?api_key=38c02880f9f69c49ba83e5b023f7dc67&page=${loadCounter}`).
      then(res => res.json()).
      then(data => {
        if (filter.filterGenre.length > 0 || filter.sort[0] !== null || filter.dateFilter.end !== undefined || filter.dateFilter.start !== undefined) {
          filteredData(data?.results);
        }
        else {
          setMovies(data?.results);
        }

      });

  }

  console.log(movies)
  return <div>
    <div className="container my-5 ">
    <CustonP className='text-center'>Popular Movies</CustonP>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-3 ">
          <StyledDiv className="container ">
            <StyledDiv className="row ">
              <StyledDiv className="col-sm-12 my-3">
                Sort By:
                <select className="form-select my-3" onChange={handleSelect}>
                  <option selected>Open this select menu</option>
                  <option value={1}>{"A->Z"}</option>
                  <option value={2}>{"Z->A"}</option>
                  <option value={3}>{"Asc By Popular"}</option>
                  <option value={4}>{"Des By Popular"}</option>
                  <option value={6}>{"Asc by Release"}</option>
                  <option value={5}>{"Desc by Release"}</option>

                </select>
              </StyledDiv>
              <StyledDiv className="col-sm-12 mt-3">Filter By
                <StyledDiv className="container mb-3">
                  <StyledDiv className="row">
                    <StyledDiv className="col-sm-12 my-3">
                      From:
                      <DatePicker onChange={(date) => handlerDate(date, "start")} />
                    </StyledDiv>
                    <StyledDiv className="col-sm-12">
                      To:
                      <DatePicker onChange={(date) => handlerDate(date, "end")} />
                    </StyledDiv>
                  </StyledDiv>

                </StyledDiv>

                <GenreContainer setFilter={setFilter} filterData={filter} />
              </StyledDiv>
              <DivButtons style={{marginLeft:'30%'}} onClick={searchHandler}>Search</DivButtons>
            </StyledDiv>
          </StyledDiv>
        </div>
        <div className=" col-sm-12 col-md-12 col-lg-9 mt-2" >
          <div className="container" style={{ overflowX: 'overlay', height: 750 }}>
            <div className="row">
              {
                movies.map((data, indis) => <div className="col"><MovieCard movie={data} widthCard={150} /></div>)
              }
            </div>

          </div>
          
          <DivButtons onClick={() => setLoadCounter(prev => prev + 1)}>Load More</DivButtons>
        </div>

      </div>
    </div>


  </div>;
}
