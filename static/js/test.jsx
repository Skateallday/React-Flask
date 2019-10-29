import React from "react";
import Test from "./testing";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');
var $ = require('jquery');

import bottle from '../dist/98737d221bb9a9e8cee6b16199ad645c.jpg';

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
                <Test name='Marc' />
                </div>
            </PageHeader>
        );
    }
}
