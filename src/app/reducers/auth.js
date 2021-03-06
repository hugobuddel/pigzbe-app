import {
    AUTH_CREATE,
    AUTH_LOGIN_START,
    AUTH_LOGIN_FAIL,
    AUTH_LOGIN,
    AUTH_LOGIN_KID,
    AUTH_LOGOUT,
    AUTH_LOGOUT_KID,
    AUTH_TOUCH_ID_SUPPORT
} from '../actions';

export const initialState = {
    passcode: null,
    isLoggingIn: false,
    loggedIn: false,
    error: null,
    touchIdSupport: false,
    kid: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_CREATE:
            return {
                ...state,
                passcode: action.passcode
            };
        case AUTH_LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: null
            };
        case AUTH_LOGIN_FAIL:
            return {
                ...state,
                isLoggingIn: false,
                error: action.error
            };
        case AUTH_LOGIN:
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true,
            };
        case AUTH_LOGIN_KID:
            return {
                ...state,
                isLoggingIn: false,
                loggedIn: true,
                kid: action.kid,
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                loggedIn: false
            };
        case AUTH_LOGOUT_KID:
            return {
                ...state,
                loggedIn: false,
                kid: null,
            };
        case AUTH_TOUCH_ID_SUPPORT:
            return {
                ...state,
                touchIdSupport: action.support
            };
        default:
            return state;
    }
};
