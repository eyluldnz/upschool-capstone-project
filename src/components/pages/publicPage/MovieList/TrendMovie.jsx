import React, { useEffect, useState } from 'react';
import { ListGroup, ButtonGroup, ToggleButton } from 'react-bootstrap';
import MovieCard from './MovieCard';

export default function TrendMovie() {

    const [trendData, setTrendData] = useState([]);


    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('day');

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=38c02880f9f69c49ba83e5b023f7dc67").
            then(res => res.json()).
            then(data => setTrendData(data.results));
    }, []);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/${radioValue}?api_key=38c02880f9f69c49ba83e5b023f7dc67`).
            then(res => res.json()).
            then(data => setTrendData(data.results));
    }, [radioValue]);
    return <div>
        <ButtonGroup style={{marginLeft:0}}>
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
                    trendData?.map(data => <ListGroup.Item><MovieCard movie={data} /></ListGroup.Item>)
                }

            </ListGroup>
        </div>

    </div>;
}
