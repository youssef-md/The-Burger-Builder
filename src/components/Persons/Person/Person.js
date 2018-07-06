import React, { Component } from 'react' 
import styles from './Person.css'

class Person extends Component {
  
  render() {
    
    return (
      <div className = { styles.Person }>
        <p>I'm { this.props.name } and I'm { this.props.age } years old</p>
        <p>{ this.props.children }</p>
        <button className = {styles.deleteBtn} onClick = { this.props.click }>DELETE</button>
        <input type = "text" onChange = { this.props.changed } value = { this.props.name }/>
      </div>
    )
  }
}


export default Person