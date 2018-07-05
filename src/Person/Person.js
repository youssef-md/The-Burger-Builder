import React from 'react' 
import styles from './Person.css'

const Person = (props) => {
  return (
    <div className = { styles.Person }>
      <p>I'm { props.name } and I'm { props.age } years old</p>
      <p>{ props.children }</p>
      <button className = {styles.delete_btn} onClick = { props.click }>DELETE</button>
      <input type = "text" onChange = {props.changed} value = {props.name}/>
    </div>
  )
}


export default Person