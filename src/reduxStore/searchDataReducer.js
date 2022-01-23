const initialStata={
    history:[],
    searchResult:[]
}

const ADD_HISTORY = "ADD_HISTORY";
const ADD_RESULT= "ADD_RESULT";

export const addHistory = (data) => {

    
        return{
            type: ADD_HISTORY,
            payload:data
        };
   

};

export const addResults=(data)=>{

    return {
        type:ADD_RESULT,
        payload:data,
    }
}



const searchDataReducer= ( state=initialStata, action) => {
    switch (action.type) {
        case ADD_HISTORY:
            return {...state, history:[...state.history,action.payload] };

            case ADD_RESULT:
                state.searchResult=[...action.payload]
                return {...state};
            default:
                return state;
    }
}

export default searchDataReducer;