import React, { Component } from "react";

class About extends Component {
    render() {
        return (  
            <div class="card">
            <div class="card-header">
            <h3>About Us</h3>
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
              <p> I'm Harshid Keraliya from Gujarat. In this page i am writing my introduction and experience related to this field. i am computer science engineering student in <a href="https://www.ldrp.ac.in/">LDRP-ITR.</a></p>
                <p>This blog where i post blogs related to HTML, CSS, and JavaScript/jQuery/Ajax projects along with creative coding stuff such as CSS Animations & Effects. Here i provide the source codes of our projects in github you can use these designs/codes without any restriction and limitation. We believe my codes will help to inspire web designers & developers and also help to improve their skills.</p>
                <p> Currently i am working on React and Node js and also python(Django framework) projects.</p>
                <p>If you have any queries please do not hesitate to contact us :<br />
                Email: harshidkeraliya.com</p>
                <footer class="blockquote-footer"><b>Harshid </b><cite title="Source Title"><b>Keraliya</b></cite></footer>
              </blockquote>
            </div>
          </div>
        );
    }
}

export default About;