import React, { Component, Fragment } from 'react' 
import styles from './Person.css'
import withClass from '../../hoc/withClass'
import PropTypes from 'prop-types'

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
    if(this.props.position === 0)
      this.inputElement.focus()
  }
  render() {
    console.log('[Person.js] Inside render()')
    return (
      <Fragment>
        <p>I'm { this.props.name } and I'm { this.props.age } years old</p>
        <p>{ this.props.children }</p>
        <button className = {styles.deleteBtn} onClick = { this.props.click }>DELETE</button>
        <input 
          type = "text" 
          onChange = { this.props.changed } 
          value = { this.props.name }
          ref = { (input) => { this.inputElement = input }} />
      </Fragment>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  click: PropTypes.func,
  changed: PropTypes.func
}

export default withClass(Person, styles.Person)