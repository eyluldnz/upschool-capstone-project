import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { fetchDisvocerMovie } from '../../../../api';
import MovieCard from './MovieCard';

export default function DiscoverMovie() {
    const {isLoading,data,isFetched,isFetching, ...query}=useQuery('discovers',fetchDisvocerMovie);
    const [trendData,setTrendData]=useState([]);

    if(isLoading){
        return <h4>Yükleniyor</h4>
    }
  
    return <div>

        <ListGroup horizontal={'sm'}>
            {
                data?.data?.results?.map(data=><ListGroup.Item><MovieCard movie={data}/></ListGroup.Item>)
            }
           
        </ListGroup>
       
    </div>;
}
