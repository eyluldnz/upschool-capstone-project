import React from 'react'
import { useQuery } from 'react-query'
import { useSelector,useDispatch} from 'react-redux'
import { fetchGenres } from '../../../api';
import { TableContainer, TableFilter, FilterOption } from '../../styledComponents/UserTableComponents'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {addFavFilm,removeFavFilm,addSeenFilm,removeSeenFilm} from '../../../reduxStore/userReducer'

export default function UserProfile() {
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    const { data, isLoading, ...query } = useQuery('genres', fetchGenres);
    const clickFavButtons = (e,type,id,movie) => {
        switch(type){
            case "addFav":
                dispatch(addFavFilm(movie)); break;
            case "removeFav":
                dispatch(removeFavFilm(movie.id)); break;
            default: ;

        }
    }
    
    const clickSeenButtons = (e,type,id,movie) => {
        switch(type){
            case "addSeen":
                dispatch(addSeenFilm(movie)); break;
            case "removeSeen":
                dispatch(removeSeenFilm(movie.id)); break;
            default: ;

        }
    }

    if (isLoading) {
        return <h1>Yükleniyor</h1>
    }
    return (
        <div className='container' style={{ bottom: 0, maxHeight: '100%' }}>
            <div className="row">
                <div className="col-12">
                    <TableFilter>
                        <FilterOption>Deneme</FilterOption>
                        <FilterOption>Deneme</FilterOption>
                        <FilterOption>Deneme</FilterOption>
                        <FilterOption>Deneme</FilterOption>
                        <FilterOption>Deneme</FilterOption>
                    </TableFilter>
                    <TableContainer>

                        <thead>
                            <tr>
                                <th>Film ID</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(new Set(user.seenList.seenFilms.concat(user.favList.favFilms).map(s => s.id))).map(
                                id => (<tr>
                                    <td>{id}</td>
                                    <td >{user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id)["original_title"]}</td>
                                    <td>{user.seenList.seenFilms.concat(user.favList.favFilms).
                                        find(s => s.id === id)["genre_ids"].
                                        map(id => (<i>{data?.data?.genres?.find(genre => genre.id === id).name},</i>))}</td>
                                    <td>
                                        
                                            {user.favList.favFilms.some(film => film.id === id) ? <FavoriteIcon onClick={(e) => clickFavButtons(e, "removeFav",id,user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))} /> :
                                                <FavoriteBorderIcon onClick={(e) => clickFavButtons(e, "addFav",id,user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))} />}
                                        
                                        
                                            {user.seenList.seenFilms.some(film => film.id === id) ? <BookmarkIcon onClick={(e) => clickSeenButtons(e, "removeSeen",id,user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))} /> :
                                                <BookmarkBorderIcon onClick={(e) => clickSeenButtons(e, "addSeen",id,user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))} />}
                                       
                                    </td>
                                </tr>)
                            )}
                            
                        </tbody>
                    </TableContainer>
                </div>
            </div>

        </div>
    )
}
