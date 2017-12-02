import React, { Component } from 'react';
import Card from './Card';

class Categories extends Component {
    state = { genre: [] };
    componentDidMount() {
        const copy = [];
        this.props.movies.map((movie, i) => {
            if (movie.genre === this.props.match.params.id){
                copy.push(movie);
            }
        });
        this.setState({ genre: copy });
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0" }}>
                <div className="row" style={{marginLeft: "3rem"}}>
                    <h2>{this.props.match.params.id}</h2>
                </div>
                <div className="row">
                    {this.state.genre.map((movie, i) => <Card key={i} data={movie} location="popular"/>)}
                </div>
            </div>
        );
    }
}

export default Categories;