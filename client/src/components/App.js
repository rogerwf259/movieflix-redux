import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { BrowserRouter } from 'react-router-dom';

import Landing from './Tacos';
import Dashboard from './Dashboard';
import Player from './Player';

class App extends Component {
    componentDidMount() {
        this.props.userFetch();
        this.props.moviesFetchData('https://rogerwf259.github.io/MoviesJSON/movies/movies.json');
    }
    render() {
        return (
            <div className="content">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/home" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/player/:id" component={Player} />
                </Switch>
            </BrowserRouter>    
            </div>
        );
    }
}

export default connect(null, actions)(App);