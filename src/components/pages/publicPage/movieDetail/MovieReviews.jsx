import React from 'react';
import { useQuery } from 'react-query';
import { fetchReview } from '../../../../api';
import { ListGroup, Image } from 'react-bootstrap';

export default function MovieReviews({ movieId, ...props }) {
    const { data } = useQuery("reviews", () => fetchReview(movieId));

    return <div>

        <ListGroup  >
            {
                data?.data?.results?.map(review => (

                    <ListGroup.Item>
                        <div className="container">
                            <div className="row">
                                <div className="col-2 mx-0">
                                    <Image style={{ width: 75, borderRadius: 50, }} src={
                                        review["author_details"]?.["avatar_path"] !== null ? review["author_details"]?.["avatar_path"].slice(1) :
                                            "https://joeschmoe.io/api/v1/random"}
                                    /></div>
                                <div className="col-9">
                                    <b>{review["author"]}</b>

                                    <p >
                                        {review["content"] !== null ? review["content"].slice(0, 105) : " "} ...
                                    </p>
                                    <small>{review["created_at"].slice(0, 9).split('-').reverse().join('/')}</small>
                                </div>
                            </div>
                        </div>




                    </ListGroup.Item>
                )
                )
            }

        </ListGroup>
    </div>;
}

