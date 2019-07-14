import { SET_AUTHED_USER } from '../actions/authedUser'

// const LOGGEDIN_USER = window.localStorage.getItem('user');
// console.log('LOGGED_USER', LOGGEDIN_USER);

export default function authedUser(state = null, action) {
    switch (action.type) {
        case  SET_AUTHED_USER:
            return action.id;
        default:
            return state
    }
}