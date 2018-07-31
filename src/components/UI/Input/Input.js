import React from 'react'
import styles from './Input.css'

const Input = (props) => {

  let inputElement = null

  switch (props.inputType) {
    case ('input'):
      inputElement = <input className = { styles.InputElement }{...props}/>
      break
    case ('textarea'):
      inputElement = <textarea className = { styles.InputElement }{...props}/>
      break
    default:
      inputElement = <input className = { styles.InputElement } {...props}/>
      break
  }

  return (
    <div className = { styles.Input}>
      <label>{ props.label }</label>
      { inputElement }
    </div>
  )
}