import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { id: 'asd1', name: 'Youssef', age: 18 },
      { id: 'asd2', name: 'Alice', age: 19 },
      { id: 'asd3', name: 'Sol', age: 2 } 
    ]
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

  deletePersonHandler = (personIndex) => {

    //const newPersonsArray = this.state.persons -- get the pointer to the original state BAD PRACTICE !
    //const newPersonsArray = this.state.persons.slice()
    const newPersonsArray = [...this.state.persons] //creating a copy of the array, for avoiding a pointer
    newPersonsArray.splice(personIndex, 1)
    
    this.setState({persons: newPersonsArray})
  }

  render() {

    let persons = null
    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key = { person.id }
                name = { person.name } 
                age = { person.age } 
                click = { () => this.deletePersonHandler(index) }/>
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
