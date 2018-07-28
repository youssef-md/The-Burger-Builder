import React from 'react'
import styles from './Order.css'

const Order = (props) => (
  <div className = { styles.Order }>
    <p>Ingredients: Salad (1)</p>
    <p>Price: <strong>$ 2.00</strong></p>
  </div>
)

export default Order