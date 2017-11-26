import React, { Component } from 'react';
import classNames from 'classnames';

import Login from './Login';
import Signup from './Signup';

class Landing extends Component {
    state = { activeForm: '', signin: true ,login: false };
    renderForm() {
        if (this.state.activeForm === 'login'){
            return <Login />
        } else {
            return <Signup />
        }
    }
    handleLoginClick() {
        this.setState({ activeForm: 'login', signin: false, login: true });
    }
    handleSignupClick() {
        this.setState({ activeForm: 'signup', signin: true, login: false });
    }
    render(){ 
        const classes = classNames({
            f_ind: true,
            signin: this.state.signin
        });
        const classesl = classNames({
            f_ind: true,
            login: this.state.login
        });
    return (
        <div id="landing_container">
            <div id="logo">
                <h3 className="logo_text">MOVIEFLIX</h3>
                <p className="logo_text">Watch movies anytime, anywhere..</p>
                <div id="logo_img">
                    <img src="spacecraft.svg" alt="" />
                </div>
            </div>
            <div id="fhalf">
                <div id="forms">      
                    <a className={classes} onClick={this.handleSignupClick.bind(this)}>Sign Up</a>
                    <p className="f_ind">or</p>
                    <a className={classesl} onClick={this.handleLoginClick.bind(this)}>Log In</a>
                    {this.renderForm()}
                </div>
            </div>
        </div>
    );
}
}

export default Landing;