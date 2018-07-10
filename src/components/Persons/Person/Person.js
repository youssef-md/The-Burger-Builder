import React, { Component, Fragment } from 'react' 
import styles from './Person.css'
import withClass from '../../hoc/withClass'
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'
class Person extends Component {

  constructor(props) {
    super(props)
    console.log('[Person.js] Inside constructor: ', props)

    this.inputElement = React.createRef()
  }

  componentWillMount() {
    console.log('[Person.js] Inside WillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside DidMount()')
    if(this.props.position === 0)
      this.inputElement.current.focus()
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
          ref = { this.inputElement } />
        <AuthContext.Consumer>
          { (authBool) => authBool ? <p>I'm Logged In!</p> : <p>I'm Logged Out</p> }
        </AuthContext.Consumer>
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