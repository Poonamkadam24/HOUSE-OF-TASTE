import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './Signup';

function Login(props){
    return(
	<div className="container">
        <form className="login-form">
            <h2 >Login</h2>
            <hr/>
            <br/>
            <br/>
            Name:<input type="text" placeholder="Enter name"/>
            Email:<input type="email" placeholder="Enter email"/>
            Password:<input type="password" placeholder="Enter password"/>
            <button className="login"><a href="">Login</a></button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <div className="forget">
            <div><p>Dont have an account?</p>
             <a href="/signup">Click here</a></div>
            </div>
        </form>
   
        <div/></div>
    )
}



export default Login;   