import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
    handleWatchLater(title) {
        axios.post('/add_watchlist', { title: title }).then((response) => console.log(response.data));
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
        <div className="card" style={{ color: "white"}}>
            <div className="card-image">
            <img style={{ width: "100%", maxHeight: "25rem"}} src={image} alt="" />
            <span className="card-title">{title}</span>
            </div>
            <div className="card-content" style={{ background: "#3C3E52"}}>
            <p>{year}</p>
            <p>{duration}</p>
            <p>{info}</p>
            </div>
            <div className="card-action" style={{padding: "1.5rem", background: "#3C3E52"}}>
            <a>Play Now</a>
            <a onClick={() => {this.handleWatchLater(title)}}>Add to Watchlist</a>
            </div>
            
        </div>
    );
    }
    renderWatchlistCard() {
    const { title, year, duration, info, image } = this.props.data;
        return (
        <div className="card" style={{ color: "white"}}>
            <div className="card-image">
            <img style={{ width: "100%", maxHeight: "25rem"}} src={image} alt="" />
            <span className="card-title">{title}</span>
            </div>
            <div className="card-content" style={{ background: "#3C3E52"}}>
            <p>{year}</p>
            <p>{duration}</p>
            <p>{info}</p>
            </div>
            <div className="card-action" style={{padding: "1.5rem", background: "#3C3E52"}}>
            <a>Play Now</a>
            <a style={{marginLeft: "2rem"}}>Remove Movie</a>
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