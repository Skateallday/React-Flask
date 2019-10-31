import React from "react";
import { Button, Grid, Row, Col } from "react-bootstrap";


var $ = require('jquery');

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name : ""};
    }   
    componentDidMount(){
        $.get(window.location.href + 'dash', (name) => {
            console.log(name);
            console.log('testing');
            this.personaliseUser(name);

        });    }   
    
    personaliseUser(name) {
        this.setState({name: name});
    }   

    render () {
        return (
                  <b>{this.state.name}</b>
        );
    }
}
