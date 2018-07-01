import React from 'react' 
import './Person.css'

const Person = (props) => {
  return (
    <div className = "Person">
      <p>I'm { props.name } and I'm { props.age } years old</p>
      <p>{ props.children }</p>
      <button onClick = { props.click }>switch names from presentational component</button>
      <input type = "text" onChange = {props.changed} value = {props.name}/>
    </div>
  )
}

export default Person