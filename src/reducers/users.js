import { FETCH_USERS_LOADING, FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/users'
let users = {
    loading: false,
    page: 0,
    error: "",
    users: []
};

export default function (state = users, action) {
    switch (action.type) {
        case FETCH_USERS_LOADING:
            return { ...state, loading: true };
        case FETCH_USERS_SUCCESS:
            return { ...state, loading: false, users: action.payload, page: action.page }
        case FETCH_USERS_ERROR:
            return { ...state, loading: false, error: action.error }
    }
    return state;
}
