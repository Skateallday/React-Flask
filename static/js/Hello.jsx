import React from "react";
import { Button} from "react-bootstrap";
import bottle from '../dist/1c839b99315270be1bec1905821ddd71.jpg';


var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bottle: '../static/dist/1c839b99315270be1bec1905821ddd71.jpg'}
        this.state = {name : "Marc"};
        this.state = {greeting: 'Awrite '};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }   
    componentDidMount(){
        $.get(window.location.href + 'dash', (name) => {
            this.personaliseUser(name);
            this.personaliseImg(bottle);

        });    }
    
    getPythonHello() {
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
    }    
    
    personaliseUser(name) {
        this.setState({name: name});
    }
    personaliseImg(bottle) {
        this.setState({bottle: bottle});
    }
    personaliseGreeting(greeting) {
        this.setState({greeting: greeting});
    }
    

    render () {
        return (
            <div className="card text-center">
            <div className="overflow">
            <img src={this.state.bottle} alt="Image 1" className="card-img-top"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                {this.state.greeting}             </h4>
                    <h3 className="card-title">{this.state.name}</h3>
                    
                <p className="card-text text-secondary">  
                This card here uses a database connection to randomly select a Prefix for your name!                     </p>
                <Button bsSize="large" className="btn btn-outline-success" onClick={this.getPythonHello}>  Say Something!
                    </Button>
            </div>
        </div>
                   

               
        );
    }
}
