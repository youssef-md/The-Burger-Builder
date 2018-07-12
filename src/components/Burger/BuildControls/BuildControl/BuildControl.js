import React from 'react'
import styles from './BuildControl.css'

const BuildControl = (props) => (
  <div className = { styles.BuildControl }>
    <h1 className = { styles.Label }>{ props.label }</h1>
    <button className = { styles.Less } onClick = {props.remove}>Less</button>
    <button className = { styles.More } onClick = { props.add }>More</button>
  </div>
)

export default BuildControl