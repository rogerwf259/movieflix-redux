import React from 'react';

const Login = () => {
    return (
        <div>
            <form id="form-test" method="post" action="/login">
                <div className="row">
                    <div className="input-field col s12">
                        <input name="email" placeholder="Your email goes here" id="email" type="text" validate/>
                        <label className="active" htmlFor="email">EMAIL</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input name="password" placeholder="Password" id="password" type="password" />
                        <label className="active" htmlFor="password">PASSWORD</label>
                    </div>
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                        Log In
                </button>
            </form>
        </div>
    );
}

export default Login;