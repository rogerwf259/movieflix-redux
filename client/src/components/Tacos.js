import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import Login from './auth-elements/Login';
import Signup from './auth-elements/Signup';

const Landings = ({ match }) => {
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
                    <NavLink className="f_ind" activeClassName="f_ind_active" to={`/home/signup`}>Sign Up</NavLink>
                    <p className="f_ind">or</p>
                    <NavLink className="f_ind" activeClassName="f_ind_active" to={`/home/login`}>Log In</NavLink>
                    <Route path={`/home/login`} render={() => <Login />}/>
                    <Route path={`/home/signup`} render={() => <Signup />}/>
                </div>
            </div>
        </div>
    );
}

export default Landings;