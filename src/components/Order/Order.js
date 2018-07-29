import React from 'react'
import styles from './Order.css'

const Order = (props) => {

  const ingredients = []

  for(let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })
  }


  
  return (
    <div className = { styles.Order }>
      <p>Ingredients: { ingredientOutput }</p>
      <p>Price: <strong>$ { props.price }</strong></p>
    </div>
  )
}
export default Order