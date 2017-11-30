import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Card from './Card';

class Movies extends Component {
    state = { 
        movies: []
    };
    componentDidMount() {
        axios.get('https://rogerwf259.github.io/MoviesJSON/movies/movies.json')
        .then((movRes) => {
            this.setState({ movies: movRes.data });
        });
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0" }}>
                <div className="row">
                    {this.state.movies.map((movie, i) => <Card key={i} data={movie}/>)}
                </div>
            </div>
        );
    }
}

export default Movies;


/*class Movies extends Component {
    state = { 
        movies: []
    };
    componentDidMount() {
            axios.get('https://rogerwf259.github.io/MoviesJSON/movies/movies.json')
                .then(response => this.setState({ movies: response.data }));
    }
    renderPopular() {

    }
    renderWatchlist() {

    }
    renderCategories() {
        
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0" }}>
                <div className="row">
                    {this.state.movies.map((movie, i) => <Card key={i} data={movie}/>)}
                </div>
            </div>
        );
    }
}*/