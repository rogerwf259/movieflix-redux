import React from 'react';
import { NavLink } from 'react-router-dom';

import Movies from './Movies';
import Dasboard from '../Dashboard';
import Categories from './Categories';
import Watchlist from './Watchlist';

const SideNav = (props) => {
    return (
        <div id="side-bar">
            <div id="logo_sidenav">
                <p>MOVIEFLIX</p>
            </div>
            <nav id="menu">
                    <div className="menu_item">
                        <NavLink to='/hub/popular' component={Movies}>Popular</NavLink>
                    </div>
                    <div className="menu_item">
                        <NavLink to='/hub/categories' component={Categories}>Categories</NavLink>
                    </div>
                    <div className="menu_item">
                        <NavLink to='/hub/watchlist' component={Watchlist}>Watchlist</NavLink>
                    </div>

            </nav>
            <div id="user_ack">
                <p>{`Welome ${props.data.name}`}</p>
            </div>
        </div>
    );
}

export default SideNav;