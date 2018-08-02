import React from 'react'
import styles from './Input.css'

const Input = (props) => {

  let inputElement = null
  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input onChange={props.onChangeHandler} className={styles.InputElement} {...props.elementConfig} 
          value={ props.value }/>
      )
      break
    case ('textarea'):
      inputElement = (
        <textarea onChange={props.onChangeHandler} className={styles.InputElement} {...props.elementConfig} 
          value={ props.value }/>
      )
      break
    case ('select'):
      inputElement = (
        <select onChange={props.onChangeHandler} className={styles.InputElement} value={props.value}> 
          {props.elementConfig.options.map(option => (
            <option key = { option.value } value = { option.value }> { option.displayValue }</option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <input onChange={props.onChangeHandler} className={styles.InputElement} {...props.elementConfig} 
          value={ props.value }/>
      )
      break
  }

  return (
    <div className = { styles.Input}>
      <label>{ props.label }</label>
      { inputElement }
    </div>
  )
}
export default Input