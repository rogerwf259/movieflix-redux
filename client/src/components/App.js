import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './auth-elements/Login';
import Signup from './auth-elements/Signup';
import Landings from './Tacos';
import Dashboard from './Dashboard';

const Popular = () => <h2>Popular</h2>
const Categories = () => <h2>Categories</h2>
const WatchList = () => <h2>WatchList</h2>
const routes = [
    {
        path: '/',
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
        path: '/dashboard',
        component: Dashboard,
        routes: [
            {
                path: '/dashboard/popular',
                component: Popular
            },
            {
                path: '/dashboard/categories',
                component: Categories
            },
            {
                path: '/dashboard/watchlist',
                component: WatchList
            }
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