import React from "react";

var $ = require('jquery');

export default class Post extends React.Component {
   
        constructor(props) {
          super(props);
          // This binding is necessary to make `this` work in the callback
        this.getPythonPost = this.getPythonPost.bind(this);
      

         
          this.state = {value: '', posted :'Enter something above to change it down here!'};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        getPythonPost() {
          
      }
      
        handleChange(event) {
          this.setState({value: event.target.value});
          this.setState({posted: event.target.value});
          $.get(window.location.href + 'Post', (value) => {
            console.log(this.state.value);
        });

        }
      
        handleSubmit(event) {
                      event.preventDefault();
                      console.log(event);

        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit"/>
              <p>{this.state.posted}</p>
            </form>
            
          );
        }
      }