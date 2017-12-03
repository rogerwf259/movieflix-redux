import React from 'react';

const Signup = () => {
    return (
        <div>
            <form id="form-test" method="post" action="/signup">
                <div className="row">
                    <div className="input-field col s12">
                        <input name="name" placeholder="Enter your full name" id="name" type="text" className="validate" />
                        <label className="active" htmlFor="name">NAME</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input name="email" placeholder="Your email goes here" id="email" type="text" />
                        <label className="active" htmlFor="email">EMAIL</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input name="password" placeholder="Password" id="password" type="password" />
                        <label className="active" htmlFor="password">PASSWORD</label>
                    </div>
                </div>        
                <button className="btn waves-effect waves-light center" type="submit">
                        Sign Up
                    <i className="material-icons right" />
                </button>
            </form>
        </div>
    );
}

export default Signup;