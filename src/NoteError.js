import React, { Component } from 'react';

export default class NoteError extends Component {
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
          <h2>Sorry, could not display this note</h2>
          <br />
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }
    return this.props.children;
  }
}