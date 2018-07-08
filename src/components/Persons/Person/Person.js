import React, { Component } from 'react' 
import styles from './Person.css'
import WithClass from '../../hoc/WithClass'

class Person extends Component {

  constructor(props) {
    super(props)
    console.log('[Person.js] Inside constructor: ', props)
  }

  componentWillMount() {
    console.log('[Person.js] Inside WillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside DidMount()')
  }
  render() {
    console.log('[Person.js] Inside render()')
    return (
      <WithClass classes = { styles.Person }>
        <p>I'm { this.props.name } and I'm { this.props.age } years old</p>
        <p>{ this.props.children }</p>
        <button className = {styles.deleteBtn} onClick = { this.props.click }>DELETE</button>
        <input type = "text" onChange = { this.props.changed } value = { this.props.name }/>
      </WithClass>
    )
  }
}


export default Person