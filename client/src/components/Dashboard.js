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
            <SideNav data={this.state.user} />
            {this.props.routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
        </div>
    );
}
}

export default Dashboard;