import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Movies from './Movies';
import Categories from './Categories';
import Watchlist from './Watchlist';

class SideNav extends Component {
    handleLogout() {
        axios.get('/logout').then((res) => console.log('Logged out'));
    }
    render(){
    return (
        <div id="side-bar">
            <div id="logo_sidenav">
                <p>MOVIEFLIX</p>
            </div>
            <div id="menusa">
                    <div className="menusa_item">
                        <Link to='/dashboard/popular' render={() => <Movies />}>Popular</Link>
                    </div>
                    <div className="menusa_item">
                        <Link to='/dashboard/categories' render={() => <Categories />}>Categories</Link>
                    </div>
                    <div className="menusa_item">
                        <Link to='/dashboard/watchlist' render={() => <Watchlist />}>Watchlist</Link>
                    </div>
            </div>
            <div id="user_ack">
                <p>{`Welome ${this.props.data.name}`}</p>
                <button 
                    className="btn waves-effect waves-light" 
                    onClick={() => {this.handleLogout()}}>
                        Log Out
                </button>
            </div>
        </div>
    );
}}

export default SideNav;