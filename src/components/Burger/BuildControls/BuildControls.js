import React from 'react'
import styles from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' }
]

const BuildControls = (props) => (
  <div className = { styles.BuildControls }>
  {
    controls.map(ctrl => (
      <BuildControl key = { ctrl.label } label = { ctrl.label }/>
    ))
  }
  </div>
)

export default BuildControls 