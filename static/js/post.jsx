import React from "react";


var $ = require('jquery');


const Card = props =>{
  return(
      <div className="card text-center">
          <div className="overflow">
          <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
          </div>
          <div className="card-body text-dark">
              <h4 className="card-title">
                  {props.title}
              </h4>
              <p className="card-text text-secondary">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus beatae perspiciatis commodi voluptates. Ab sapiente aut ad a odio recusandae consectetur sit veritatis ea suscipit. Repellendus, doloribus architecto? Earum, provident?
              </p>
              <a href="#" className="btn btn-outline-success">Go Anywhere</a>
          </div>
      </div>
  );
}

class Post extends React.Component {

        constructor(props) {
          super(props);
          this.state = this.props.name;

          // This binding is necessary to make `this` work in the callback
          this.imgsrc = this.props.imgsrc;
          this.state = {value: '', posted :'Enter something above to change it down here!'};      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
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
            <div className="card text-center">
              <div className="overflow">
                <img src={'../static/dist/1c839b99315270be1bec1905821ddd71.jpg'} alt="Image 1" className="card-img-top"/>
              </div>
            <div className="card-body text-dark">
                <h4 className="card-title">
                {this.state.name} 

                  This section allows users to enter text
                </h4>

                    <form className="card-text text-secondary" onSubmit={this.handleSubmit}>
                      <label>
                        Name:<input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                        <input type="submit" className="btn btn-outline-success" value="Submit"/>
                      <p>{this.state.posted}</p>
                    </form>             
            </div>
        </div>         
            
          );
        }
      }

      export default Card;
