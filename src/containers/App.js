import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state = {
    persons: [
      { id: 'asd1', name: 'Youssef', age: 18 },
      { id: 'asd2', name: 'Alice', age: 19 },
      { id: 'asd3', name: 'Sol', age: 2 } 
    ]
  }

  nameChangedHandler = (event, id, personIndex) => {
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value 

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    //const newPersonsArray = this.state.persons -- get the pointer to the original state BAD PRACTICE !
    const newPersonsArray = [...this.state.persons] 
    newPersonsArray.splice(personIndex, 1)
    this.setState({ persons: newPersonsArray })
  }



  render() {

    let persons = null

    if(this.state.showPersons) {
      persons = 
        <Persons 
          persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler } />
    }

    

    return (
      <div className={styles.App}>
        <Cockpit 
          showPersons = { this.state.showPersons }
          persons = { this.state.persons }
          clicked = { this.togglePersonHandler } />

        { persons } 
      </div>
    )

  }
}




export default App;
