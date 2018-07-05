import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person' //firs letter must be capital so React identifies as custom component

class App extends Component {

  state = {
    persons: [
      { id: 'asd1', name: 'Youssef', age: 18 },
      { id: 'asd2', name: 'Alice', age: 19 },
      { id: 'asd3', name: 'Sol', age: 2 } 
    ]
  }

  nameChangedHandler = (event, id, personIndex) => {

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value //getting the new typed name

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    //const newPersonsArray = this.state.persons -- get the pointer to the original state BAD PRACTICE !
    const newPersonsArray = [...this.state.persons] 
    newPersonsArray.splice(personIndex, 1)

    this.setState({persons: newPersonsArray})
  }



  render() {

    let persons = null
    let btnClass = ''

    if(this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person 
                key = { person.id }
                name = { person.name } 
                age = { person.age } 
                click = { () => this.deletePersonHandler(index) } 
                changed = { (event) => this.nameChangedHandler(event, person.id, index)  }/>
            })} 
        </div>
      )
      btnClass = styles.Red
    }

    const classes = []
    if(this.state.persons.length <= 2) 
      classes.push(styles.red)

    if(this.state.persons.length <= 1)
      classes.push(styles.bold)

    return (
      <div className={styles.App}>
        <h1>Hello</h1>        
        <p className = { classes.join(' ') }>This is really working</p>
        <button  
          className = { btnClass }
          onClick = { this.togglePersonHandler }>
            Toggle Persons
        </button>

        { persons } 
      </div>
    );

  }
}




export default App;
