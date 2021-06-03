import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App()
  {
   return (<Router>
    <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/"> 
            <Introduction/>
          </Route>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Resume" component={Resume} />
          </Switch>
    </div>
    </Router>
    
  );
}

export default App;