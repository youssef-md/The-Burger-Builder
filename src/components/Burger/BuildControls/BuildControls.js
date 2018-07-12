import React from 'react'
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => (
  <div className = { styles.BuildControls }>
    <BuildControl />
  </div>
)

export default BuildControls 