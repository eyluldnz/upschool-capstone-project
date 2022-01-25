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
  const [isFillFilter, setIsFillFilter] = useState(false);
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

    let fetchedData = [];

    fetch(`https://api.themoviedb.org/3/movie${globalLocation.pathname}?api_key=38c02880f9f69c49ba83e5b023f7dc67&page=${loadCounter}`).
      then(res => res.json()).
      then(data => {
        if (filter.filterGenre.length > 0 || filter.sort[0] !== null || filter.dateFilter.end !== undefined || filter.dateFilter.start !== undefined) {
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
        return movies.sort((a, b) => a["popularity"].localeCompare(b["popularity"]));
      case 4:
        return movies.sort((a, b) => a["popularity"].localeCompare(b["popularity"])).reverse();
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
      <div className="row">
        <div className="col-3 bg-light ">
          <div className="container ">
            <div className="row border">
              <div className="col-12 my-3">
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
              </div>
              <div className="col-12 mt-3">Filter By
                <div className="container mb-3">
                  <div className="row">
                    <div className="col-12 my-3">
                      From:
                      <DatePicker onChange={(date) => handlerDate(date, "start")} />
                    </div>
                    <div className="col-12">
                      To:
                      <DatePicker onChange={(date) => handlerDate(date, "end")} />
                    </div>
                  </div>

                </div>

                <GenreContainer setFilter={setFilter} filterData={filter} />
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
