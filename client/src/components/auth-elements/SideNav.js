import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = (props) => {
    return (
        <div id="side-bar">
            <div id="logo_sidenav">
                <p>MOVIEFLIX</p>
            </div>
            <nav id="menu">
                    <div className="menu_item">
                        <a href="#">Popular</a>
                    </div>
                    <div className="menu_item">
                        <a href="#">Categories</a>
                    </div>
                    <div className="menu_item">
                        <a href="#">Watchlist</a>
                    </div>
            </nav>
            <div id="user_ack">
                <p>{`Welome ${props.data.name}`}</p>
            </div>
        </div>
    );
}

export default SideNav;