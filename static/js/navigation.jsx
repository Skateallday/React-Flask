import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,  Nav, Button } from "react-bootstrap"

export default class Navigation extends React.Component {

    constructor(props) {
        super(props);
        
    }


    

    render () {
        return (
            <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/test">Test</Link>
                  </li>
                  
                </ul>
              </nav>
      
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              
            </div>
          </Router>
               
        );
    }
}





