import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardImageContainer, CardContent } from '../../../styledComponents/Cards';

export default function MovieCard({ movie, widthCard, ...props }) {

    const navigate = useNavigate();

    const clickCardHandler = () => {
        navigate(`/movie/${movie.id}`)
    }
    const moviePoster = `https://image.tmdb.org/t/p/original/${movie["poster_path"]}`
    return <>

        <CardContainer className='custom-card'>
            <CardImageContainer className='add-transition'>

                <img src={moviePoster} width={250} height={380} />

            </CardImageContainer>
            <CardContent className='add-transition' onClick={clickCardHandler}>
                <Card.Title style={{ fontSize: 14, marginBottom: 5 }}>{movie["original_title"]}</Card.Title>
                <ListGroup className="list-group-flush">
                    {movie["release_date"]?.split('-').reverse().join('/')}
                </ListGroup>
            </CardContent>

        </CardContainer>


    </>
}
