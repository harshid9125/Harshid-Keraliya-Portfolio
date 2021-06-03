import React, { Component } from "react";
import './Login.css';
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


class Login extends Component {
    render() {
        return (
            <div class="containerlogin">
             <form>
                    <h2><u>Login</u></h2>
                    <div className="login">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>
                    </div>

                    <button class="buttonOR">OR</button>

                    <div className="icons">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href=""
                        >
                            <i className="fab fa-google" id="google">
                                <FcGoogle />
                            </i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href=""
                        >
                            <i className="fab fa-twitter" id="twitter">
                                <FaTwitter />
                            </i>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href=""
                        >
                            <i className="fab fa-facebook" id="facebook">
                                <FaFacebookSquare />
                            </i>
                        </a>
                    </div>
                   
                    <div className="btnSignup">
                        <button type="button" class="btn btn-primary btn-block">Login</button>
                    </div>
                    
                    <p className="forgot-password text-right">
                        Don't have Account? <a href="/Signup">Create Account</a>
                    </p>
                </form>
        </div>
        );
        }
    }
export default Login