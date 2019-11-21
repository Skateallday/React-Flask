import React from "react";

require('../css/fullstack.css');
import { Button} from "react-bootstrap";
import bottle from '../dist/1c839b99315270be1bec1905821ddd71.jpg';


var $ = require('jquery');

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: 'Hello ' + this.props.name};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting + ' ' + this.props.name + '!'});
    }

    getPythonHello() {
        $.get(window.location.href + 'This', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
    }

    render () {
        return (
            <div className="card text-center">
            <div className="overflow">
            <img src={'../static/dist/1c839b99315270be1bec1905821ddd71.jpg'} alt="Image 1" className="card-img-top"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                {this.state.greeting}                
                {this.state.name} 
                </h4>
                <p className="card-text text-secondary">

                This button below randomly selects the prefix for your name through an array on the server.                </p>
                <Button bsSize="large" className="btn btn-outline-success" onClick={this.getPythonHello}>  Say Something!
                    </Button>
            </div>
        </div>

           
        );
    }
}
