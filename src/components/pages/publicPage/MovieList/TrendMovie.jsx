import React, { useEffect, useState } from 'react';
import { ListGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { useQuery } from 'react-query';
import { fetchTrendByFilter } from '../../../../api';

export default function TrendMovie() {

    const [trendData, setTrendData] = useState([]);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('day');

    const {data,isLoading,...query} = useQuery('movies', () => fetchTrendByFilter(radioValue));

    if(isLoading){
        return <h1>Trend Yükleniyor</h1>
    }


    return <div>
        <ButtonGroup style={{ marginLeft: 0 }}>
            {[{ name: 'Today', value: 'day' }, { name: 'Last Week', value: 'week' }].map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? 'outline-info' : 'outline-info'}
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
            <ListGroup horizontal={'sm'}>
                {
                    data?.data?.results?.map(data => <ListGroup.Item><MovieCard movie={data} /></ListGroup.Item>)
                }

            </ListGroup>
        </div>

    </div>;
}
