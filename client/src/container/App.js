import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import '../../../static/css/main.css';


class App extends Component {
  constructor(props, context) {
      super(props, context);
    }
  render() {
    return(
      <div className="wrapper">
        <Nav loggedIn={this.props.data.loggedIn} history={this.props.history}
         location={this.props.location} dispatch={this.props.dispatch}
          currentlySending={this.props.data.currentlySending} />
        { this.props.children }
      </div>
    )
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}
// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
