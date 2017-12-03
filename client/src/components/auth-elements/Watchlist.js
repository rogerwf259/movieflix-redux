import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';

class Watchlist extends Component {
    state = { 
        watchlist: []
     }
    componentDidMount() {
            axios.get('/current_user')
                .then((userRes) => {
                    const copy=[];
                    userRes.data.watchlist.forEach(element => {
                        this.props.movies.map((movie) => {
                            if (element === movie.title){
                                return copy.push(movie);
                            } else {
                                return console.log('No match');
                            }
                        });
                    });
                    this.setState({ watchlist: copy}); 
                });
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0", display: "flex" }}>
                <div className="row">
                    {this.state.watchlist.map((movie, i) => <Card key={i} data={movie} location="watchlist"/>)}
                </div>
            </div>
        );
    }
}

export default Watchlist;