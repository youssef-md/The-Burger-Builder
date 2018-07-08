import React, { PureComponent } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import WithClass from '../components/hoc/WithClass'

class App extends PureComponent {
  
  state = {
    persons: [
      { id: 'asd1', name: 'Youssef', age: 18 },
      { id: 'asd2', name: 'Alice', age: 19 },
      { id: 'asd3', name: 'Sol', age: 2 } 
    ]
  }

  constructor(props) {
    super(props)
    console.log('[App.js] Inside constructor: ' + props)
  }

  componentWillMount() {
    console.log('[App.js] Inside WillMount()')
  }

  componentDidMount() {
    console.log('[App.js] Inside DidMount()')
  }

/* 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside shouldUpdate', nextProps, nextState)
    return nextState.persons !== this.state.persons ||
           nextState.showPersons !== this.state.showPersons
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside willUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside didUpdate')
  }

  render() {
    console.log('[App.js] Inside render()')
    return (
      <WithClass classes = {styles.App}>
        <Cockpit 
          appTitle = { this.props.title }
          showPersons = { this.state.showPersons }
          persons = { this.state.persons }
          clicked = { this.togglePersonHandler } />

        { this.showPersons() } 
      </WithClass>
    )
  }

  nameChangedHandler = (event, id, personIndex) => {
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value 

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    if(this.state.persons.length === 0)
      alert('No persons left')
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonHandler = (personIndex) => {
    const newPersonsArray = [...this.state.persons] //immutable fashion: creating a copy
    newPersonsArray.splice(personIndex, 1)
    this.setState({ persons: newPersonsArray })
  }

  showPersons = () => {
    if(this.state.showPersons) {
      return( 
        <Persons 
          persons = { this.state.persons }
          clicked = { this.deletePersonHandler }
          changed = { this.nameChangedHandler } />
      )
    }
  }

}

export default App;
