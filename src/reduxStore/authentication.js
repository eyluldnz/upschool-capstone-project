import user from '../components/pages/loginPage/user.json';
import {  toast } from 'react-toastify';


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
  
};

export const logout = () => ({
    type: LOGOUT
});

const authenticationReducer = (auth = {
    isLoading: null
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