import React, { Component } from "react";
import './Introduction.css';
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

class Introduction extends Component {
    render() {
        return (  
            <>
                <div class="jumbotron">
                    <p class="lead">Welcome! </p>
                    <h1 class="text-primary"><strong>I'm Harshid Keraliya</strong></h1>
                    <hr class="my-4" />
                    <p>I am Front-end & Back-end Web Developer</p>
                </div>

                <div class="skills">
                    <h5 class="section-title h1">Skills</h5>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            {/* <div class="image-flip" ontouchstart="this.classList.toggle('hover');"> */}
                                <div class="mainflip">
                                    <div class="frontside">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <img class=" img-fluid" src="/images/react.png" alt="card image" />
                                                    <h4 class="card-title">React JS</h4>
                                                    <p class="card-text">React  is an open-source front-end JavaScript library for building user interfaces or UI components.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img class=" img-fluid" src="/images/node.png" alt="card image"></img>
                                            <h4 class="card-title">Node JS</h4>
                                            {/* <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width:90px;"> */}
                                            <p class="card-text">Node is an open source development platform for executing JavaScript code server-side.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img class=" img-fluid" src="/images/python.png" alt="card image"></img>
                                            <h4 class="card-title">Python</h4>
                                            {/* <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width:90px;"> */}
                                            <p class="card-text">Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                </div>
                </div>


                <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img class=" img-fluid" src="/images/database.png" alt="card image"></img>
                                            <h4 class="card-title">Database</h4>
                                            <p class="card-text">A database is a systematic collection of data. They support electronic storage and manipulation of data.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img class=" img-fluid" src="/images/html5.png" alt="card image"></img>
                                            <h4 class="card-title">HTML</h4>
                                            {/* <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width:90px;"> */}
                                            <p class="card-text">HTML is the standard markup language for Web pages and elements are the building blocks of HTML pages.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-4">
                    <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                        <div class="mainflip">
                            <div class="frontside">
                                <div class="card">
                                    <div class="card-body text-center">
                                        <img class=" img-fluid" src="/images/css.png" alt="card image"></img>
                                            <h4 class="card-title">CSS</h4>
                                            {/* <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width:90px;"> */}
                                            <p class="card-text">CSS is the language we use to style an HTML document and describes how HTML elements should be displayed.</p>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                </div>
                <Portfolio />
                <Footer />
        </> 
        );
    }
}

export default Introduction;