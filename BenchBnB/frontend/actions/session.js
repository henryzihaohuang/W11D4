import {postUser,
    createSession, deleteSession
} from "../util/session";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = user => {
    // debugger
    return {
    type: RECEIVE_CURRENT_USER,
    user

}};

const logoutCurrentUser = () => 
({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const signup = formUser => dispatch => postUser(formUser).then(user => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors)));

export const login = formUser => dispatch => createSession(formUser).then(user => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors)));

export const logout = () => dispatch => deleteSession().then(() => dispatch(logoutCurrentUser()), (errors) => dispatch(receiveErrors(errors)));