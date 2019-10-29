import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";
require('../css/fullstack.css');

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
            <PageHeader>

            <Grid>
                <Row>
                <Col md={7} mdOffset={5}>
                    <h1>{this.state.greeting}</h1>
                    <hr/>
                </Col>
                </Row>
                <Row>
                <Col md={7} mdOffset={5}>
                    <Button bsSize="large" bsStyle="danger" onClick={this.getPythonHello}>
                    Say Something!
                    </Button>
                </Col>
                </Row>
            </Grid>
            </PageHeader>
        );
    }
}
