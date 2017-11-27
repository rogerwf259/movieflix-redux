import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';

class Movies extends Component {
    state = { 
        movies: []
    };
    componentDidMount() {
            axios.get('https://rogerwf259.github.io/MoviesJSON/movies/movies.json')
                .then(response => this.setState({ movies: response.data }));
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto" }}>
                <div className="row">
                    {this.state.movies.map((movie, i) => <Card key={i} data={movie}/>)}
                </div>
            </div>
        );
    }
}

export default Movies;