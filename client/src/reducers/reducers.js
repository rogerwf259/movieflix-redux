import {
    FETCH_MOVIES,
    FETCH_USER,
    FETCH_GENRE,
    FETCH_WATCHLIST
} from '../actions/types';

export function rUser(state = {}, action) {
    switch(action.type) {
        case FETCH_USER:
            return action.payload;
        default: 
            return state;
    }
}

export function rMovies(state = [], action) {
    switch(action.type) {
        case FETCH_MOVIES:
            return action.payload;
        default:
            return state;
    }
}

export function rGenre(state = [], action) {
    switch(action.type) {
        case FETCH_GENRE:
            return action.payload;
        default:
            return state;
    }
}

export function rWatchlist(state = [], action) {
    switch(action.type) {
        case FETCH_WATCHLIST:
            return action.payload;
        default: 
            return state;
    }
}