import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Movies from './auth-elements/Movies';
import SideNav from './auth-elements/SideNav';

const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
)

const Dashboard = ({ routes }) => {
    return (
        <div id="dashboard">
            {/*<h2>Dashboard</h2>
            <ul>
                <li><NavLink to="/hub/popular">Popular</NavLink></li>
                <li><NavLink to="/hub/categories">Categories</NavLink></li>
                <li><NavLink to="/hub/watchlist">Watchlist</NavLink></li>
            </ul>
            {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}*/}
            <SideNav />
            <Movies />
        </div>
    );
}

export default Dashboard;