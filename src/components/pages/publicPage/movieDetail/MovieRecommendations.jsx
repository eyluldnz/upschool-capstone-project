import React from 'react';
import { useQuery } from 'react-query';
import { fetcRecommandation } from '../../../../api';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function MovieRecommendations({ movieId, ...props }) {

    const { data, isLoading, ...query } = useQuery("recommandations", () => fetcRecommandation(movieId));

    const posterUrl = "https://image.tmdb.org/t/p/original/"
    return <div>

        <ListGroup horizontal={'sm'}>

            {

                data?.data?.results?.map(data =>

                    <ListGroup.Item>


                        <Card style={{ textAlign: 'center', width: 200 }}   >

                            <Card.Img variant="top" src={posterUrl + data["poster_path"]} height={150} />
                        </Card>


                    </ListGroup.Item>
                )
            }

        </ListGroup>;
    </div>

}
