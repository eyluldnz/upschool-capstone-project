import React from 'react';
import { useQuery } from 'react-query';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { fetchMovieById,fetchMovieCredits } from '../../../../api';

export default function MovieCast({movieId, ...props }) {
    
    const {data:credits}=useQuery('credits',()=>fetchMovieCredits(movieId));

    const personImg = "https://image.tmdb.org/t/p/original/";
    return <div>
        <div className="container my-5" >

            <div className="row">

                <div className='col-sm-12 col-12' style={{ overflowX: 'overlay' }}>
                    <ListGroup horizontal={'sm'}>
                        {credits?.data?.cast?.map(person => (

                            <ListGroup.Item styleName="col-sm-12">
                                <Card style={{ textAlign: 'center', width: 200 }}   >
                                    <Card.Img variant="top" src={personImg + person["profile_path"]} height={150} />
                                    <Card.Body style={{ marginBottom: 2 }}>
                                        <Card.Title style={{ fontSize: 16 }}>{person.character}</Card.Title>
                                        <Card.Title style={{ fontSize: 14, marginBottom: 5 }}> {person["original_name"]}</Card.Title>
                                    </Card.Body>

                                </Card>
                            </ListGroup.Item>

                        ))}
                    </ListGroup>
                </div>

            </div>

        </div>
    </div>;
}
