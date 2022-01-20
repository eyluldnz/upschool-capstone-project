import user from '../components/pages/loginPage/user.json';


const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

export const login = (loginUser) => {

    let newUser = user;
    const isExistUser = user.find(x => x.username === loginUser.username);
    if (isExistUser !== null && isExistUser.password === loginUser.password) {
        return{
            type: LOGIN
        };
    
    }
    else{
        return{
            type: LOGOUT
        };
    }


};

export const logout = () => ({
    type: LOGOUT
});

const authenticationReducer = (auth = {
    isLoading: false
}, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...auth, isLoading: true
            };
        case LOGOUT:
            return {
                ...auth, isLoading: false
            }
            default:
                return auth;
    }
}

export default authenticationReducer;