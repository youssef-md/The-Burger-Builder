import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent{

  constructor(props) {
    super(props)
    console.log('[Persons.js] Inside constructor: ', props)
  }

  componentWillMount() {
    console.log('[Persons.js] Inside WillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] Inside DidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside WillReceiveProps', nextProps)
  }

 /*  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldUpdate', nextProps, nextState)
    return nextProps.changed !== this.props.changed||
           nextProps.persons !== this.props.persons ||
           nextProps.clicked !== this.props.clicked
  } */

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside willUpdate', nextProps, nextState)
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside didUpdate')
  }

  render() {

    console.log('[Persons.js] Inside render()')
    return this.props.persons.map((person, index) => {
        return <Person 
          key = { person.id }
          name = { person.name } 
          age = { person.age } 
          click = { () => this.props.clicked(index) } 
          changed = { (event) => this.props.changed(event, person.id, index) } >
            Acessing children
          </Person>
      })
  }
}


export default Persons