import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { name: 'Youssef', age: 18 },
      { name: 'Alice', age: 19 }
    ]
  }

  switchNameHandler = (newName1, newName2 ) => {
    this.setState({
      persons: [
        { name: newName1, age: 18 },
        { name: newName2, age: 19}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 18 },
        { name: event.target.value, age: 19}
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
          click = { this.switchNameHandler.bind(this, 'YouYou', 'AliAli') }
          changed = {this.nameChangedHandler} >
            My hobbies: Programming
        </Person>
        
        <Person 
          name = { this.state.persons[1].name }
          age = { this.state.persons[1].age } 
          click = { this.switchNameHandler.bind(this, 'Youssefinho', 'Alicinha') }
          changed = { this.nameChangedHandler }/>

        <button  
          style = {style} 
          onClick = { () => this.switchNameHandler('Youssef', 'Alice') }>
            Switch name
        </button>
      </div>
    );

  }
}


const style = {
  backgroundColor: 'white',
  border: '2px solid black',
  padding: '18px',
  borderRadius: '20px',
  cursor: 'pointer'
}


export default App;
