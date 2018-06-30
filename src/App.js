import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { name: 'Youssef', age: 18 }
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 18 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <Person 
          name = { this.state.persons[0].name } 
          age = { this.state.persons[0].age } 
          click = { this.switchNameHandler.bind(this, 'YouYou', 'AliAli', 'ZéZé') }
          changed = {this.nameChangedHandler} >
            My hobbies: Programming
        </Person>
        
        <button onClick = { () => this.switchNameHandler('Yousssef') }>Switch name</button>
      </div>
    );

  }
}

export default App;
