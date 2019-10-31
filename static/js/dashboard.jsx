import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
import background from "../images/header.jpg";


var $ = require('jquery');

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: 'Awrite ' + this.props.name};

        // This binding is necessary to make `this` work in the callback
        this.getPythonHello = this.getPythonHello.bind(this);
    }

    personaliseGreeting(greeting) {
        this.setState({greeting: greeting + ' ' + this.props.name + '!'});
    }

    getPythonHello() {
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
            this.personaliseGreeting(data);
        });
    }
    

    render () {
        return (
            <Grid>
                <Row>
                <Col md={5} mdOffset={2}>
                    <h3>{this.state.greeting}</h3>
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
