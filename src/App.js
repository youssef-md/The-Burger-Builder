import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person name="Youssef" age="18" />
        <Person name="Alice" age="19" />
      </div>
    );

  }
}

export default App;
