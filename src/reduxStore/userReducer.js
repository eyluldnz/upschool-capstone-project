const initialStata = {
    avatarUrl: "",
    username: "",
    joinDate: "",
    seenList: {seenFilms:[],totalCount:0},
    favList: {favFilms:[],totalCount:0}
}
const MAP_USER="MAP_USER";

const ADD_SEEN_FILM = "ADD_SEEN_FILM";
const ADD_FAV_FILM = "ADD_FAV_FILM";
const REMOVE_SEEN_FILM = "REMOVE_SEEN_FILM";
const REMOVE_FAV_FILM = "REMOVE_FAV_FILM";

export const mapUser=(user)=>{
    return {
        type: MAP_USER,
        payload: user
    };
}



export const addSeenFilm = (data) => {

    return {
        type: ADD_SEEN_FILM,
        payload: data
    };

};

export const addFavFilm = (data) => {

    return {
        type: ADD_FAV_FILM,
        payload: data,
    }
}
export const removeSeenFilm = (data) => {

    return {
        type: REMOVE_SEEN_FILM,
        payload: data
    };

};

export const removeFavFilm = (data) => {

    return {
        type: REMOVE_FAV_FILM,
        payload: data,
    }
}



const userReducer = (state = initialStata, action) => {
    switch (action.type) {

        case MAP_USER:
            return {
                ...state,
                avatarUrl:action.payload.avatarUrl,
                username:action.payload.username,
                joinDate:action.payload.joinDate,
                seenList:action.payload.seenList,
                favList:action.payload.favList,


            }
        case ADD_SEEN_FILM:
            return {
                ...state,seenList:
                {...state.seenList,seenFilms:[...state.seenList.seenFilms,action.payload],
                    totalCount:state.seenList.totalCount+1}
            };

        case ADD_FAV_FILM:
            return {
                ...state,favList:{...state.favList,
                    favFilms:[...state.favList.favFilms,action.payload],
                    totalCount:state.favList.totalCount+1}
            };
        case REMOVE_SEEN_FILM:
            return {
                ...state,seenList:{seenFilms:state.seenList.seenFilms.filter(film=>film.id!==action.payload),totalCount:state.seenList.totalCount-1}
            };

        case REMOVE_FAV_FILM:
            return {
                ...state,favList:{favFilms:state.favList.favFilms.filter(film=>film.id!==action.payload),totalCount:state.favList.totalCount-1}
            };
          
        default:
            return state;
    }
}

export default userReducer;