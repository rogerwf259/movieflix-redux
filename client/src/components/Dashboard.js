import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Movies from './auth-elements/Movies';
import SideNav from './auth-elements/SideNav';

const RouteWithSubRoutes = (route) => (
    <Route exact path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
)

class Dashboard extends Component {
    state = { user: [] };
    componentDidMount() {
        axios.get('/current_user').then((response) => this.setState({ user: response.data }));
    }
    render() {
        //console.log(this.state.user.name);
    return (
        <div id="dashboard">
            {/*<h2>Dashboard</h2>
            <ul>
                <li><NavLink to="/hub/popular">Popular</NavLink></li>
                <li><NavLink to="/hub/categories">Categories</NavLink></li>
                <li><NavLink to="/hub/watchlist">Watchlist</NavLink></li>
            </ul>
            {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}*/}
            <SideNav data={this.state.user} />
            <Movies />
        </div>
    );
}
}

export default Dashboard;