export const setLoginState = (value) => ({
    type: 'SET_LOGIN_STATE',
    payload: value
});

export const setLoggedInEmail = (email) => ({
    type: 'SET_LOGGED_IN_EMAIL',
    payload: email
});
