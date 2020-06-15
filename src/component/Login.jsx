import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './css/login.css';

class Login extends Component {
    state = {  }

    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
    }

    responseFacebook = (response) => {
        console.log(response);
      }

    render() { 
        return ( 
            <div className="login-container">
                <h1>Login page</h1>
                <p>You can login using any of the below three options available</p>
                <br/>
                
                <GoogleLogin 
                    clientId = "946865116825-r74c6363ighb1l1h9l9mksr58j8j2p7h.apps.googleusercontent.com"
                    buttonText="Login using Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                <br/>
                <br/>
                <FacebookLogin
                    appId="255930772355354"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                />
            </div>
         );
    }
}
 
export default Login;