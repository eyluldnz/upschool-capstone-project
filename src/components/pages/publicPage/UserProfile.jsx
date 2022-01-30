import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGenres } from '../../../api';
import { TableContainer, TableFilter, FilterOption } from '../../styledComponents/UserTableComponents'
import { CustonP } from '../../styledComponents/ListStyled'
import FavoriteIcon from '@material-ui/icons/Favorite';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { addFavFilm, removeFavFilm, addSeenFilm, removeSeenFilm } from '../../../reduxStore/userReducer'


export default function UserProfile() {
    const { user } = useSelector(state => state);
    const dispatch = useDispatch();

    const { data, isLoading, ...query } = useQuery('genres', fetchGenres);

    const [selectValue, setSelectValue] = useState(0);
    const [userFilms, setUserfilms] = useState([]);


    useEffect(() => {
        setUserfilms(Array.from(new Set(user.seenList.seenFilms.concat(user.favList.favFilms).map(s => s.id))).map(
            id => (user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))))

    }, [user])

    useEffect(() => {
        switch (selectValue) {
            case "0":
                setUserfilms(Array.from(new Set(user.seenList.seenFilms.concat(user.favList.favFilms).map(s => s.id))).map(
                    id => (user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))
                )); break;

            case "1":
                setUserfilms([...Array.from(new Set(user.seenList.seenFilms.concat(user.favList.favFilms).map(s => s.id))).map(
                    id => (user.seenList.seenFilms.concat(user.favList.favFilms).find(s => s.id === id))
                ).sort((a, b) => {
                    return new Date(a["release_date"]) > new Date(b["release_date"]) ? -1 : 1

                })]); break;
            case "2":
                setUserfilms([...user.favList.favFilms]); break;
            case "3":
                setUserfilms([...user.seenList.seenFilms]); break;


            default: break;
        }


    }, [selectValue])


    const clickFavButtons = (e, type, id, movie) => {
        switch (type) {
            case "addFav":
                dispatch(addFavFilm(movie)); break;
            case "removeFav":
                dispatch(removeFavFilm(movie.id)); break;
            default: ;

        }

    }

    const clickSeenButtons = (e, type, id, movie) => {
        switch (type) {
            case "addSeen":
                dispatch(addSeenFilm(movie)); break;
            case "removeSeen":
                dispatch(removeSeenFilm(movie.id)); break;
            default: ;

        }
    }

    const handleSelect = (e) => {

        setSelectValue(e.target.value);

    }


    if (isLoading) {
        return <h1>Yükleniyor</h1>
    }
    console.log(data)
    return (
        <div className='container' style={{ bottom: 0, maxHeight: '100%', marginTop: 10 }}>
            <CustonP className='text-center'>User Results</CustonP>
            <div className="row">
                <div className="col-12 mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">

                            </div>
                            <div className="col-sm-12 col-md-6">
                                <TableFilter onChange={handleSelect}>
                                    <FilterOption value={0}>Select</FilterOption>
                                    <FilterOption value={1}>Closest Release Date</FilterOption>
                                    <FilterOption value={2}>Favourites</FilterOption>
                                    <FilterOption value={3}>SeenList</FilterOption>

                                </TableFilter>
                            </div>
                        </div>
                    </div>

                    <TableContainer>

                        <thead>
                            <tr>
                                <th>Film ID</th>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Release Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userFilms?.map(movie => (<tr>
                                    <td>{movie.id}</td>
                                    <td>{movie["original_title"]}</td>
                                    <td>{movie["genre_ids"].
                                        map(id => (<i>{data?.data?.genres?.find(genre => genre.id === id).name},</i>))}
                                    </td>
                                    <td>{movie["release_date"]?.split('-').reverse().join('/')}</td>
                                    <td>

                                        {user.favList.favFilms.some(film => film.id === movie.id) ? <FavoriteIcon onClick={(e) => clickFavButtons(e, "removeFav", movie.id, movie)} /> :
                                            <FavoriteBorderIcon onClick={(e) => clickFavButtons(e, "addFav", movie.id, movie)} />}


                                        {user.seenList.seenFilms.some(film => film.id === movie.id) ? <BookmarkIcon onClick={(e) => clickSeenButtons(e, "removeSeen", movie.id, movie)} /> :
                                            <BookmarkBorderIcon onClick={(e) => clickSeenButtons(e, "addSeen", movie.id, movie)} />}

                                    </td>

                                </tr>))
                            }

                        </tbody>
                    </TableContainer>

                </div>
            </div>

        </div>
    )
}
