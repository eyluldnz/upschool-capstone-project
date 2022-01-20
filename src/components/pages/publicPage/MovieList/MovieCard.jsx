import React from 'react';
import { Card, ListGroup, ListGroupItem,Button } from 'react-bootstrap';

export default function MovieCard({ movie, ...props }) {
    const moviePoster = `https://image.tmdb.org/t/p/original/${movie["poster_path"]}`
    return <Card style={{width:200,textAlign: 'center'}} >
        <Button>...</Button>
        <Card.Img variant="top" src={moviePoster} height={250} />
        <Card.Body style={{marginBottom:2}}>
            <Card.Title style={{ fontSize: 14,marginBottom:5 }}>{movie["original_title"]}</Card.Title>
            <ListGroup className="list-group-flush">
            <ListGroupItem>{movie["release_date"].split('-').reverse().join('/')}</ListGroupItem>
        </ListGroup>
        </Card.Body>
        

    </Card>
}
