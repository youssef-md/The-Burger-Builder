import React from 'react'
import styles from './BuildControl.css'

const BuildControl = (props) => (
  <div className = { styles.BuildControl }>
    <h1 className = { styles.Label }>{ props.label }</h1>
    <button className = { styles.Less }>Less</button>
    <button className = { styles.More }>More</button>
  </div>
)

export default BuildControl