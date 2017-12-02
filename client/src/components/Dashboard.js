import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Movies from './auth-elements/Movies';
import SideNav from './auth-elements/SideNav';
import Categories from './auth-elements/Categories';
import Watchlist from './auth-elements/Watchlist';

class Dashboard extends Component {
    state = { user: [], movies: [] };
    componentDidMount() {
        axios.all([
            axios.get('https://rogerwf259.github.io/MoviesJSON/movies/movies.json'),
            axios.get('/current_user')
        ]).then(axios.spread((movRes, userRes) => {
            this.setState({ user: userRes.data, movies: movRes.data });
        }));
    }
    render() {
    return (
        <div id="dashboard">
            <SideNav data={this.state.user} />
            <Route path="/dashboard/popular" render={() => <Movies />}/>
            <Route path="/dashboard/categories/:id" render={(props) => <Categories {...props} movies={this.state.movies}/>}/>
            <Route path="/dashboard/watchlist" render={(props) => <Watchlist {...props} movies={this.state.movies}/>}/>
        </div>
    );
}
}

export default Dashboard;