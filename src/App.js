import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { name: 'Youssef', age: 18 },
      { name: 'Alice', age: 19},
      { name: 'Joseliton', age: 20}
    ]
  }

  switchNameHandler = () => {
    alert('hellow')
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person name = { this.state.persons[0].name } age = { this.state.persons[0].age } >My hobbies: Programming</Person>
        <Person name = { this.state.persons[1].name } age = { this.state.persons[0].age } />
        <Person name = { this.state.persons[2].name } age = { this.state.persons[0].age } />
        <button onClick = { this.switchNameHandler }>Switch name</button>
      </div>
    );

  }
}

export default App;
