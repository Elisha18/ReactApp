import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';
// import image from './css/image/img_4664.png';
// import {toggle} from '../util/navbar';
import './css/navbar.css'

class NavBar extends Component {
    // state = {  }
    handleClick=()=>{
        var x= document.getElementById("navbar");
        
        if(x.className==="topnav"){
            x.className +=" responsive";
        }
        else{
            x.className = "topnav";
        }
        console.log(x.className);
    }
    render() { 
        return ( 
            <nav className="topnav container-nav" id="navbar">
                <div className="wrapper">

                <Link className="navbar-brand" to="/">Elisha George</Link>
                {/* <div className="navbar-collapse"> */}

                    {/* <div className="navbar-nav"> */}
                    <Link to="javascript:void(0);" className="icon nav-link" onClick={this.handleClick}>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </Link>
                    <NavLink className="nav-item nav-link" to="/contactUs">ContactUs</NavLink>
                    <NavLink className="nav-item nav-link" to="/register">Register</NavLink> 
                    <NavLink className="nav-item nav-link" to="/login">Login</NavLink>
                    <NavLink className="nav-item nav-link active" to="/aboutUs">About Us</NavLink>
                    
                    {/* </div> */}
                {/* </div> */}
            
                </div>
            </nav>
         );
    }
}
 
export default NavBar;