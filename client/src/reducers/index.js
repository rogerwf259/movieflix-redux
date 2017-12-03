import { combineReducers } from 'redux';
import {
    rUser, rMovies, rGenre, rWatchlist
} from './reducers';

export default combineReducers({
    movies: rMovies,
    user: rUser,
    genre: rGenre,
    watchlist: rWatchlist
});