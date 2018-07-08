import React from 'react'
import styles from './Cockpit.css'
import Aux from '../hoc/Aux'

const Cockpit = (props) => {

  const classes = []
  let btnClass = styles.Button

  if(props.showPersons && props.persons.length !== 0)
    btnClass = [styles.Button, styles.Red].join(' ') //Button Red

  if(props.persons.length <= 2) 
    classes.push(styles.red)

  if(props.persons.length <= 1)
    classes.push(styles.bold)

  return (
    <Aux>
      <h1>{ props.appTitle }</h1>        
      <p className = { classes.join(' ') }>This is really working</p>
      <button  
      className = { btnClass }
      onClick = { props.clicked }>
            Toggle Persons
        </button>
    </Aux>
)
}

export default Cockpit