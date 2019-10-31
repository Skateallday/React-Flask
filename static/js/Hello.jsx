import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";


var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : "Marc"};
        this.state = {greeting: 'Awrite '};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }   
    componentDidMount(){
        $.get(window.location.href + 'dash', (name) => {
            console.log(name);
            this.personaliseUser(name);

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

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting});
    }
    

    render () {
        return (
            <Grid>
                <Row>
                <Col md={5} mdOffset={8}>
                    <h3>{this.state.greeting}</h3>
                    <h3>{this.state.name}</h3>

                    <hr/>
                </Col>
                </Row>
                <Row>
                <Col md={5} mdOffset={2}>                   
                    <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
                    Say Anything!
                    </Button>
                    
                </Col>
                </Row>
            </Grid>
        );
    }
}
