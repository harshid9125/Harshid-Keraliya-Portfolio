import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navigation extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-md bg-primary navbar-dark">
                <a class="navbar-brand" href="#">Harshid</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <div class="container">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/About"} class="nav-link active">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/Contact"} class="nav-link active">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link to={"/Resume"} class="nav-link active">Resume</Link>
                        </li>
                    </ul>
                   
                     
                    </div>
                    <Link to={"/Login"} button class="btn btn-dark my-2 my-sm-0" type="button">Login</Link>
                    </div>
                
                {/* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Link to={"/Login"} button class="btn btn-dark me-md-2">Login
                </div> */}
            </nav>

        );
    }
}

export default Navigation;