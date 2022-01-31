import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { fetchDisvocerMovie } from '../../../../api';
import MovieCard from './MovieCard';
import {CustonLıstItem,ListDiv} from '../../../styledComponents/ListStyled'

export default function DiscoverMovie() {
    const {isLoading,data,isFetched,isFetching, ...query}=useQuery('discovers',fetchDisvocerMovie);
    const [trendData,setTrendData]=useState([]);

    if(isLoading){
        return <div class="text-center ">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
  
    return <ListDiv>

        <ListGroup horizontal={'sm'} style={{height:330}}>
            {
                data?.data?.results?.map(data=><CustonLıstItem><MovieCard movie={data}/></CustonLıstItem>)
            }
           
        </ListGroup>
       
    </ListDiv>;
}
