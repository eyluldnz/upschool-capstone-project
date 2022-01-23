import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function MovieSummary({ movieSummary, credits, ...props }) {

    const imageUrl = `https://image.tmdb.org/t/p/original/${movieSummary["poster_path"]}`
    return <div>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <Card>
                        <Card.Img variant="top" src={imageUrl} height={450} width={150} />
                    </Card>
                </div>
                <div className="col-9">
                    <Card>

                        <Card.Body>
                            <Card.Title><Card.Text> {movieSummary["title"]}</Card.Text></Card.Title>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem> <Card.Text>
                                    <b>Genres:</b>{movieSummary["genres"]?.map(genre => <span>{" "}{genre.name}{","}</span>)}

                                </Card.Text></ListGroupItem>
                                <ListGroupItem> <Card.Text>
                                    <b> Release Date: </b>
                                    {movieSummary["release_date"]?.split('-').reverse().join('/')}
                                </Card.Text></ListGroupItem>
                                <ListGroupItem> <Card.Text>
                                    <b> Runtime: </b>
                                    {movieSummary["runtime"]}- Sec.
                                </Card.Text></ListGroupItem>
                                <ListGroupItem> <Card.Text>
                                    <b> Overview: </b>
                                    {movieSummary["overview"]}
                                </Card.Text></ListGroupItem>
                                <ListGroupItem> <Card.Text>
                                    <b> Crew: </b>

                                    <div className="container mt-2" style={{overflowY:'overlay',height:100}}>
                                        <div className="row">

                                            {credits?.data?.crew?.map(person => (<div className="col-2">
                                                <Card style={{ textAlign: 'center',height:100 }}   >

                                                    <Card.Body >
                                                        <Card.Title style={{ fontSize: 14}}>{person.name}</Card.Title>
                                                        
                                                            {person["known_for_department"]}
                                                        
                                                    </Card.Body>

                                                </Card>
                                            </div>))}
                                        </div>


                                    </div>


                                </Card.Text></ListGroupItem>

                            </ListGroup>


                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>;
}
