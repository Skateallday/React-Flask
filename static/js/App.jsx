import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');

import HeaderBackgroundImage from '../images/header.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.getPythonHello = this.getPythonHello.bind(this);
        this.state = {user : "Marc"};


    }
    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HeaderBackgroundImage;
    }
    

    getPythonUser() {
        $.get(window.location.href + 'dash', (user) => {
            console.log(user);
            this.personaliseUser(user);
        });
    }

    getPythonHello() {
        $.get(window.location.href + 'hello', (data) => {
            console.log(data);
        });
    }

    render () {
        return (
            <PageHeader>
                <div className='header-contents'>
                    <h3>This works with an array in the server file!</h3>
                {this.addHeaderImg()}
                <Hello name={this.state.user}/>
                </div>
            </PageHeader>
        );
    }
}