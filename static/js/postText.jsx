import React from "react";
import Post from "./post";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');

import bottle from '../images/bottle.jpg';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }
    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = bottle;
    }

    render () {
        return (
            <PageHeader>
                <div className='header-contents'>
                    <h3>This will work with a database connection</h3>
                {this.addHeaderImg()}
                <Post name='Marc' />
                </div>
            </PageHeader>
        );
    }
}
