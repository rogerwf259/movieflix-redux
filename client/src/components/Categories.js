import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from './Card';

class Categories extends Component {
    componentDidMount() {
        this.props.genreFetch(this.props.movies, this.props.match.params.id);
    }
    render() {
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0" }}>
                <div className="row" style={{marginLeft: "3rem"}}>
                    <h2>{this.props.match.params.id}</h2>
                </div>
                <div className="row">
                    {this.props.genre.map((gen, i) => <Card key={i} data={gen} location="popular"/>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ movies, genre }) {
    return { movies, genre };
}

export default connect(mapStateToProps, actions)(Categories);