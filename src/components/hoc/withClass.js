import React, { Component } from 'react';

const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className = { className }>
          <h3>HOC Wrapping the Component</h3>
          <WrappedComponent { ...this.props } />
        </div>
      )
    }
  }
}

export default withClass