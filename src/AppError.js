import React, { Component } from 'react';

export default class AppError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error:false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() { 
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oh no! The application has encountered a problem.</h2>
          <br />
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}