import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Materialize from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

import Movies from './Movies';
import Categories from './Categories';
import Watchlist from './Watchlist';
import { setTimeout } from 'timers';

class SideNav extends Component {
    handleLogout() {
        axios.get('/logout').then((res) => console.log('Logged out'));
    }
    render(){
    return (
        <div id="side-bar">
            <div id="logo_sidenav">
                <p className="btn pulse" >MOVIEFLIX</p>
            </div>
            <div id="menusa">
                    <div className="menusa_item">
                        <NavLink to='/dashboard/popular' activeClassName="pop_wat_act" className="pop_wat" render={() => <Movies />}>Popular</NavLink>
                    </div>
                    <div className="menusa_item">
                        <a className='dropdown-button pop_wat' data-hover="true" data-activates='dropdown1'>Categories</a>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li><Link to={`/dashboard/categories/Horror`} render={() => <Categories />}>Horror</Link></li>
                            <li><Link to={`/dashboard/categories/Action`} render={() => <Categories />}>Action</Link></li>
                            <li><Link to={`/dashboard/categories/Adventure`} render={() => <Categories />}>Adventure</Link></li>
                            <li><Link to={`/dashboard/categories/Science Fiction`} render={() => <Categories />}>Science Fiction</Link></li>
                            <li><Link to={`/dashboard/categories/Comedy`} render={() => <Categories />}>Comedy</Link></li>
                            <li><Link to={`/dashboard/categories/Documental`} render={() => <Categories />}>Documental</Link></li>
                        </ul>
                    </div>
                    <div className="menusa_item">
                        <NavLink to='/dashboard/watchlist' activeClassName="pop_wat_act" className="pop_wat" render={() => <Watchlist />}>Watchlist</NavLink>
                    </div>
            </div>
            <div id="user_ack">
                <p>{`Welome ${this.props.data.name}`}</p>
                <Link 
                    id="logout"
                    to="/"
                    className="btn waves-effect waves-light" 
                    onClick={() => {this.handleLogout()}}>
                        Log out
                </Link>
            </div>
        </div>
    );
}}

export default SideNav;