import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { name: 'Youssef', age: 18 },
      { name: 'Alice', age: 19 },
      { name: 'Sol', age: 2 } 
    ]
  }

  switchNameHandler = (newName1, newName2, newName3 ) => {
    this.setState({
      persons: [
        { name: newName1, age: 18 },
        { name: newName2, age: 19},
        { name: newName3, age: 2}
      ],
      showPersons: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  
  render() {

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(person => {
              return <Person name = { person.name } age = { person.age }/>
            })
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hello</h1>
        
        { persons }
        
        <button  
          style = {style} 
          onClick = { this.togglePersonHandler }>
            Toggle Persons
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
