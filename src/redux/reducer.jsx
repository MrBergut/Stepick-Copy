const initialState = {
    loginState: false,
    loggedInEmail: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_STATE':
            return {
                ...state,
                loginState: action.payload
            };
        case 'SET_LOGGED_IN_EMAIL':
            return {
                ...state,
                loggedInEmail: action.payload
            };
        default:
            return state;
    }
};

export default reducer;