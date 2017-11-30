import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from './auth-elements/Login';
import Signup from './auth-elements/Signup';
import Landings from './Tacos';
import Dashboard from './Dashboard';
import Movies from './auth-elements/Movies';

const routes = [
    {
        path: '/home',
        component: Landings,
        routes: [
            {
                path: '/home/login',
                component: Login
            },
            {
                path: '/home/signup',
                component: Signup
            }
        ]
    },
    {
        path: '/hub',
        component: Dashboard,
        routes: [
            {
                path: '/hub/popular',
                component: Movies
            },
            {
                path: '/hub/categories',
                component: Movies
            },
            {
                path: '/hub/watchlist',
                component: Movies            }
        ]
    }
];

const RouteWithSubRoutes = (route) => (
    <Route excat path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
)

class App extends Component {
    render() {
        return (
            <Router>
                <div className="content">
                    <Switch>
                    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;