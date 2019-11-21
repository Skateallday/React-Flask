import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import background from "../images/header.jpg";

require('../css/fullstack.css');
var $ = require('jquery');

import HeaderBackgroundImage from '../images/header.jpg';

export default class dash extends React.Component {
    constructor(props) {
        super(props);
        this.getPythonHello = this.getPythonHello.bind(this);

    }
    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HeaderBackgroundImage;
    }

    getPythonHello() {
        $.get(window.location.href + 'hello', (username) => {
            console.log(username);
            this.personaliseGreeting(username);
        });
    }

    render () {
        return (
            <PageHeader>
            <div className="card-body text-dark">
                    <h3>This works with an array in the server file!</h3>
                {this.addHeaderImg()}
                <Hello name="Marc" />
                </div>
            </PageHeader>
        );
    }
}