import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    return (
        <nav id="menu">
            <div className="m_item">
                <NavLink className="title" to="/">UPIFLIX</NavLink>
            </div>
            <div className="m_item">
                <NavLink to="/dashboard">Popular</NavLink>
                <i className="m_icon fa fa-bar-chart" aria-hidden="true"></i>
            </div>
            <div className="m_item">
                <NavLink to="/categories">Categories</NavLink>
                <i className="m_icon fa fa-film" aria-hidden="true"></i>
            </div>
            <div className="m_item">
                <NavLink to="/watchlist">Watchlist</NavLink>
                <i className="m_icon fa fa-bookmark" aria-hidden="true"></i>
            </div>
            <div className="m_item">
                <NavLink to="/history">History</NavLink>
                <i className="m_icon fa fa-history" aria-hidden="true"></i>
            </div>
            <div className="m_item">
                <NavLink to="/settings">Settings</NavLink>
                <i className="m_icon fa fa-cog" aria-hidden="true"></i>
            </div>
      </nav>
    );
}

export default SideNav;