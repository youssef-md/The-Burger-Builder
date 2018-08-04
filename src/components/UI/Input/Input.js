import React from 'react'
import styles from './Input.css'

const Input = (props) => {

  let inputElement = null
  let inputStyling = [styles.InputElement]
  let validationMessage = null

  if(props.shouldValidate && props.touched) {
    if(props.valid) {
      inputStyling.push(styles.Valid)
    } else {
      inputStyling.push(styles.Invalid)
      validationMessage = <p className = {styles.Message}>
                            Please enter a valid { props.elementConfig.placeholder }
                          </p>
    } 
  }

  switch (props.elementType) {
    case ('input'):
      inputElement = 
        <input onChange={props.onChangeHandler} className={inputStyling.join(' ')} {...props.elementConfig} 
          value={ props.value }/>
      break
    case ('textarea'):
      inputElement = 
        <textarea onChange={props.onChangeHandler} className={inputStyling.join(' ')} {...props.elementConfig} 
          value={ props.value }/>
      break
    case ('select'):
      inputElement = (
        <select onChange={props.onChangeHandler} className={inputStyling.join(' ')} value={props.value}> 
          {props.elementConfig.options.map(option => (
            <option key = { option.value } value = { option.value }>{ option.displayValue }</option>
          ))}
        </select>
      )
      break
    default:
      inputElement = 
        <input onChange={props.onChangeHandler} className={inputStyling.join(' ')} {...props.elementConfig} 
          value={ props.value }/>
      break
  }

  return (
    <div className = { styles.Input}>
      <label>{ props.label }</label>
      { inputElement }
      { validationMessage }
    </div>
  )
}
export default Input