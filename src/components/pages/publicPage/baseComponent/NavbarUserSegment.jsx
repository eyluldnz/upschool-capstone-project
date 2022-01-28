import React from 'react';
import { Link, } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { IconContainer, IconCount } from '../../../styledComponents/NavbarIcons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';


export default function NavbarUserSegment() {

    const { user } = useSelector(state => state);

    return <div className='container' >
        <div className="row">
            <div className="col-xs-2 col-md-3 ">

                <Link to='/profile' >
                    <Image style={{ width: 50, borderRadius: 50, margin: 10 }} src="https://joeschmoe.io/api/v1/random" />
                </Link>


            </div>
            <div className=" col-xs-10 col-md-9 mt-1">
                <div className="row">
                    <div className="col-sm-12 col-md-8">


                        {user.username}-12-07-1996

                    </div>
                    <div className="col-sm-12 col-md-9">

                        <div className="row mt-3">
                            <div className=" col-xs-1 col-sm-3 col-md-4 col-lg-2">
                                <div class="d-flex align-item-center">
                                    <IconContainer>
                                        <FavoriteIcon className='mr-5' />
                                        <IconCount>{user.favList.totalCount}</IconCount>
                                    </IconContainer>


                                </div>

                            </div>
                            <div className=" col-xs-1 col-sm-3 col-md-4  col-lg-2">
                                <div class="d-flex align-item-center">
                                    <IconContainer>
                                        <BookmarkIcon className='mr-5' />
                                        <IconCount>{user.seenList.totalCount}</IconCount>
                                    </IconContainer>


                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4  col-lg-6">
                                Social Media
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>

    </div>;
}
