import React from "react";
import User from "./userName";

require('../css/fullstack.css');
var $ = require('jquery');


export default class DashUser extends React.Component {
    constructor(props) {
        super(props);
        this.getPythonUser = this.getPythonUser.bind(this);
        this.state = {user : "Marc"};
    }
    

    getPythonUser() {
        $.get(window.location.href + 'dash', (user) => {
            console.log(user);
            console.log('another test')
            this.personaliseUser(user);
        });
    }


    render () {
        return (
               
                <User name={this.state.user}/>
        );
    }
}