import React from 'react';
import { useQuery } from 'react-query';
import { fetchReview } from '../../../../api';
import { Card, ListGroup, ListGroupItem,Image} from 'react-bootstrap';
import { Comment, Tooltip, Avatar, } from 'antd';
import moment from 'moment';

export default function MovieReviews({ movieId, ...props }) {
    const { data, isLoading, ...query } = useQuery("recommandations", () => fetchReview(movieId));

    const ImgUrl = "https://image.tmdb.org/t/p/original/"
    return <div>

        <ListGroup  >
            {
                //rQ2Sidqubi7XiHDScFe1faIz3Uv.jpg
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
                                <small>{review["created_at"].slice(0,9).split('-').reverse().join('/')}</small>
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
