import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './Tacos';
import Dashboard from './Dashboard';

class App extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route path="/home" component={Landing} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>    
            </div>
        );
    }
}

export default App;