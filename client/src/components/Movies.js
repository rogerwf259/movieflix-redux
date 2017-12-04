import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class Movies extends Component {
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0" }}>
                <div className="row">
                    {this.props.movies.map((movie, i) => <Card key={i} data={movie} location="popular"/>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ movies }) {
    return { movies };
}

export default connect(mapStateToProps)(Movies);
