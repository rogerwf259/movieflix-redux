import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';

class Card extends Component {
    handleWatchLater(title) {
        axios.post('/add_watchlist', { title: title }).then((response) => console.log(response.data));
    }
    handleRemoveWatchlist(title) {
        axios.post('/remove_from_watchlist', { title: title }).then((response) => console.log(response.data));
    }
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
                onClick={() => {
                    this.handleWatchLater(title);
                    Materialize.toast(`Added ${title} to Watch Later!`, 3000, 'rounded')
                }} 
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
            onClick={() => {
                this.handleRemoveWatchlist(title)
            }} 
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
        <div className="col m3 s6">
            {this.whatToRender()}
        </div>
    );
}
}

export default Card;

