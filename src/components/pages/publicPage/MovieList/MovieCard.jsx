import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CardContainer, CardImageContainer, CardContent, CardButton } from '../../../styledComponents/Cards';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {addFavFilm,removeFavFilm,addSeenFilm,removeSeenFilm} from '../../../../reduxStore/userReducer'
import { ThemeContext } from '../../../../contexts/ThemeContext';
import {CustonLıstItem,ListDiv} from '../../../styledComponents/ListStyled'


export default function MovieCard({ movie, widthCard, ...props }) {

    const { seenList, favList } = useSelector(state => state.user);

    const {themeName}=useContext(ThemeContext)

    const dispatch = useDispatch();

    let isFav = false;

    const navigate = useNavigate();

    const clickCardHandler = () => {
        navigate(`/movie/${movie.id}`)
    }

    const clickFavButtons = (e,type) => {
        switch(type){
            case "addFav":
                dispatch(addFavFilm(movie)); break;
            case "removeFav":
                dispatch(removeFavFilm(movie.id)); break;
            default: ;

        }
    }
    
    const clickSeenButtons = (e,type) => {
        switch(type){
            case "addSeen":
                dispatch(addSeenFilm(movie)); break;
            case "removeSeen":
                dispatch(removeSeenFilm(movie.id)); break;
            default: ;

        }
    }
    const moviePoster = `https://image.tmdb.org/t/p/original/${movie["poster_path"]}`
    return <>

        <CardContainer className='custom-card'>
            <CardImageContainer className='add-transition'>

                <img src={moviePoster} width={250} height={380} />

            </CardImageContainer>
            <CardContent  className='add-transition'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-3" onClick={clickCardHandler}>
                            <Card.Title style={{ fontSize: 14, marginBottom: 5 }}>{movie["original_title"]}</Card.Title>
                            <CustonLıstItem className="list-group-flush">
                                {movie["release_date"]?.split('-').reverse().join('/')}
                            </CustonLıstItem>
                        </div>

                        <div className="col-6">
                            {favList.favFilms.some(film => film.id === movie.id) ? <FavoriteIcon  onClick={(e)=>clickFavButtons(e,"removeFav")} /> :
                                <FavoriteBorderIcon  onClick={(e)=>clickFavButtons(e,"addFav")} />}
                        </div>
                        <div className="col-6">
                            {seenList.seenFilms.some(film => film.id === movie.id) ? <BookmarkIcon  onClick={(e)=>clickSeenButtons(e,"removeSeen")} /> :
                                <BookmarkBorderIcon  onClick={(e)=>clickSeenButtons(e,"addSeen")} />}
                        </div>
                    </div>
                </div>
            </CardContent>

        </CardContainer>


    </>
}
