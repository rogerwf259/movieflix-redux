import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Tacos';
import Dashboard from './Dashboard';
import Player from './auth-elements/Player';

class App extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/home" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/player/:id" component={Player} />
                </Switch>    
            </div>
        );
    }
}

export default App;