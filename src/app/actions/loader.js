import {
    authTouchId,
    authKeychain,
    authLogin,
    profileLoad,
    messagesLoad,
    loadEscrow
} from './';

const pkg = require('../../../package.json');

export const LOADER_LOADING = 'LOADER_LOADING';

const loading = value => ({type: LOADER_LOADING, value});

export const load = key => dispatch => {
    dispatch(loading(true));
    return dispatch(authLogin(key))
        .then(() => dispatch(profileLoad()))
        .then(() => dispatch(loadEscrow()))
        .then(() => dispatch(messagesLoad()))
        .catch(error => console.error(error))
        .finally(() => dispatch(loading(false)));
};

export const tryAutoLoad = () => dispatch => {
    console.log('tryAutoLoad');
    dispatch(authKeychain())
        .then(key => {
            if (key) {
                dispatch(authTouchId())
                    .then(() => dispatch(load(key)))
                    .catch(error => console.log(error));
            }
        });
};

export const loadContent = query => () => {
    const {space, accessToken} = pkg.contentful;
    return fetch(`https://cdn.contentful.com/spaces/${space}/entries?access_token=${accessToken}&${query}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json());
};
