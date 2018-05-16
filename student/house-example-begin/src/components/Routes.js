import React, { Component } from 'react';

class Router extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  // without binding this, consoling 'this' will return null
  // this is a good use case for binding
  handleClick() {
    console.log(this.props)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <p>This is the {this.props.match.params.routes}.</p>
        <button onClick={this.handleClick}>Back to home</button>
      </div>
    );
  };
}

export default Router;
