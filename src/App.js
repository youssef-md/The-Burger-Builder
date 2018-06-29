import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person />
        <Person />
        <Person />
      </div>
    );

  }
}

export default App;
