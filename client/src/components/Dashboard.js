import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Movies from './Movies';
import SideNav from './SideNav';
import Categories from './Categories';
import Watchlist from './Watchlist';

class Dashboard extends Component {
    render() {
        return (
            <div id="dashboard">
                <SideNav data={this.props.user} />
                <Route path="/dashboard/popular" render={() => <Movies movies={this.props.movies}/>}/>
                <Route path="/dashboard/categories/:id" render={(props) => <Categories {...props} />}/>
                <Route path="/dashboard/watchlist" render={(props) => <Watchlist />}/>
            </div>
        );
    }
}

function mapStateToProps({ user, movies }) {
    return { user, movies };
}

export default connect(mapStateToProps)(Dashboard);