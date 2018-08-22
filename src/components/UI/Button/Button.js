import React from 'react'
import styles from './Button.css'

const Button = (props) => (
  <button 
    disabled = { props.disabled }
    className = { [styles.Button, styles[props.btnType]].join(' ') }
    onClick = { props.click }>
      { props.children }
  </button>
);

export default Button;