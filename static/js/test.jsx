import React from "react";
import Test from "./testing";
import Hello from "./Hello";
import Post from "./post";

import img1 from "../images/frog.jpg";
import img2 from "../images/street.jpg";
import img3 from "../images/car.jpg";

require('../css/fullstack.css');
var $ = require('jquery');

export default class App extends React.Component {


    render () {
        return (
            
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <Test imgsrc={img1} name='Marc' />
                    </div>
                    <div className="col-md-4">
                    <Hello imgsrc={img2}  />
                    </div>
                    <div className="col-md-4">                        
                    <Post imgsrc={img3} title='Lee' />
                    </div>
                </div>
            </div>
            
        
                    
    );
    }
}
