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
  <p className = { styles.Price }>
    Current Price: <b>${props.totalPrice.toFixed(2)}
  </b></p>

  {controls.map(ctrl => (
      <BuildControl 
        key = { ctrl.type } 
        label = { ctrl.label }
        add = { () => props.addIngredient(ctrl.type) }
        remove = { () => props.removeIngredient(ctrl.type) }
        disable = { props.disabled[ctrl.type] }/>
    ))}
    <button 
      className = { styles.OrderButton }
      disabled = { !props.purchasable }
      onClick = { props.order }>ORDER NOW</button>
  </div>
)

export default BuildControls 