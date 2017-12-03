import {
    FETCH_MOVIES,
    FETCH_USER,
    FETCH_GENRE,
    FETCH_WATCHLIST
} from './types';
import axios from 'axios';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

export const moviesFetchData = (url) => async dispatch => {
    const res = await axios.get(url);
    dispatch({ type: FETCH_MOVIES, payload: res.data });
}

export const userFetch = () => async dispatch => {
    const res = await axios.get('/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const genreFetch = (movies, genre) => dispatch => {
    const copy = [];
    movies.map((movie) => {
        if (movie.genre === genre){
            copy.push(movie);
        }
    });
    dispatch({ type: FETCH_GENRE, payload: copy });
}

export const watchlistFetch = (movies, watchlist) => dispatch => {
    const copy = [];
    watchlist.forEach(element => {
        movies.map((movie) => {
            if (element === movie.title){
                return copy.push(movie);
            } else {
                return console.log('No match');
            }
        });
    });
    dispatch({ type: FETCH_WATCHLIST, payload: copy });
}

export const updateWatchlist = (title) => async dispatch => {
    const res = await axios.post('/add_watchlist', { title: title });
    renderToast(res.data, title);
    dispatch({ type: FETCH_USER, payload: res.data });
}
export const removeFromWatchlist = (title) => async dispatch => {
    const res = await axios.post('/remove_from_watchlist', { title: title });
    Materialize.toast(`Removed ${title} from Watchlist!`, 3000, 'rounded');
    dispatch({ type: FETCH_USER, payload: res.data });
}

export const renderToast = (status, title) => {
    if (status === 'existing movie'){
        return (Materialize.toast(`${title} is already on your Watchlist!`, 3000, 'rounded'));
     }
     Materialize.toast(`Added ${title} to Watch Later!`, 3000, 'rounded');
}
