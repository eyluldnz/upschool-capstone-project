import React, { useEffect, useState } from 'react';
import { ListGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { useQuery } from 'react-query';
import { fetchTrendByFilter } from '../../../../api';
import {CustonLıstItem,ListDiv} from '../../../styledComponents/ListStyled'

export default function TrendMovie() {

    const [trendData, setTrendData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('day');

    const {data,isLoading,...query} = useQuery(['movies',radioValue], () => fetchTrendByFilter(radioValue));

    if(isLoading){
        return <div class="text-center ">
        <div class="spinner-border text-warning" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }


    return <div>
        <ButtonGroup style={{ marginLeft: 0 }}>
            {[{ name: 'Today', value: 'day' }, { name: 'Last Week', value: 'week' }].map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-warning' : 'outline-warning'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
            ))}
        </ButtonGroup>
        <div style={{ overflowX: 'overlay' }}>
            <ListDiv horizontal={'sm'} style={{height:330}}>
                {
                    data?.data?.results?.map(data => <CustonLıstItem><MovieCard movie={data} /></CustonLıstItem>)
                }

            </ListDiv>
        </div>

    </div>;
}
