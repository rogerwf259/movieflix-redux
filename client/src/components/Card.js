import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class Card extends Component {
    whatToRender() {
        switch(this.props.location) {
            case 'popular': 
                return this.renderMovieCard();
            case 'watchlist':
                return this.renderWatchlistCard();
            default: 
                return;
        }
    }
    renderMovieCard() {
    const { title, year, duration, info, image } = this.props.data;
        return (
            <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img alt="" className="activator" src={image} />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
              <Link to={`/player/${title}`}>Play Now</Link>
              <a 
                onClick={() => {this.props.updateWatchlist(title)}} 
                className="right"
            >
                Watch Later
            </a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
                <p>{duration}</p>
                <p>{year}</p>
                <p>{info}</p>
            </div>
          </div>
    );
    }
    renderWatchlistCard() {
    const { title, year, duration, info, image } = this.props.data;
        return (
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="" className="activator" src={image} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{title}<i className="material-icons right">more_vert</i></span>
          <Link to={`/player/${title}`}>Play Now</Link>
          <a 
            onClick={() => {this.props.removeFromWatchlist(title)}} 
            className="right"
        >
            Remove
        </a>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
            <p>{duration}</p>
            <p>{year}</p>
            <p>{info}</p>
        </div>
      </div>
    );
    }
    render() {
    return (
        <div className="col l3 m6 s12">
            {this.whatToRender()}
        </div>
    );
}
}

export default connect(null, actions)(Card);

