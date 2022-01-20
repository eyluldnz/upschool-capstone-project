import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default function DiscoverMovie() {const [trendData,setTrendData]=useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=38c02880f9f69c49ba83e5b023f7dc67").
            then(res => res.json()).
            then(data =>setTrendData(data.results));
    }, []);
    return <div>
        <ListGroup horizontal={'sm'}>
            {
                trendData?.map(data=><ListGroup.Item><MovieCard movie={data}/></ListGroup.Item>)
            }
           
        </ListGroup>
        Trend Movies
    </div>;
}
