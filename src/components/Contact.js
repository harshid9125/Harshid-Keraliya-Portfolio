import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
    render() {
        return (  
            <div class="container my-3">
            <h3>Contact Us</h3>
            <form action="/shop/contact/" method="post">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name='name' placeholder="Enter Your Name" />
          </div>
          <div class="form-group">
            <label for="name">Email</label>
            <input type="email" class="form-control" id="email" name='email' placeholder="Enter Your Email" />
          </div>
        
            <div class="form-group">
            <label for="name">Phone</label>
            <input type="tel" class="form-control" id="phone" name='phone' placeholder="Enter Your Phone Number" />
          </div>
        
        
           <div class="form-group">
            <label for="desc">How May We Help You?</label>
            <textarea class="form-control" id="desc" name='desc' rows="3"></textarea>
          </div>

          <div class="submit">
                <button type="submit" class="btn btn-success">Submit</button>
                </div>
        </form>
        
        
        
        </div>
        );
    }
}

export default Contact;