import React from "react";
import Hello from "./Hello";
import { PageHeader } from "react-bootstrap";
import background from "../images/header.jpg";

require('../css/fullstack.css');
var $ = require('jquery');

import HeaderBackgroundImage from '../images/header.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HeaderBackgroundImage;
    }

    render () {
        return (
            <PageHeader>
                <div className='header-contents'>
                    <h3>This works with an array in the server file!</h3>
                {this.addHeaderImg()}
                <Hello name='Marc' />
                </div>
            </PageHeader>
        );
    }
}