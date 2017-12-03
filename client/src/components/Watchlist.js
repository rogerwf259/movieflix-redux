import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from './Card';

class Watchlist extends Component {
    componentDidMount() {
        this.props.watchlistFetch(this.props.movies, this.props.user.watchlist);
    }
    render() {
        console.log(this.props.watchlist);
        return (
            <div style={{ width: "90%", height: "auto", position: "absolute", right: "0", display: "flex" }}>
                <div className="row">
                    {this.props.watchlist.map((movie, i) => <Card key={i} data={movie} location="watchlist"/>)}
                </div>
            </div>
        );
    }
}

function mapStateToProps({ movies, user, watchlist }) {
    return { user, movies, watchlist };
}

export default connect(mapStateToProps, actions)(Watchlist);