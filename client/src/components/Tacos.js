import React from 'react';
import { NavLink, Route } from 'react-router-dom';


const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    )}/>
)

const Landings = ({ routes }) => {
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
                    <NavLink className="f_ind" activeClassName="f_ind_active" to="/home/signup">Sign Up</NavLink>
                    <p className="f_ind">or</p>
                    <NavLink className="f_ind" activeClassName="f_ind_active" to="/home/login">Log In</NavLink>
                    {routes.map((route, i) => (<RouteWithSubRoutes key={i} {...route}/>))}
                </div>
            </div>
        </div>
    );
}

export default Landings;