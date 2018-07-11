import React from 'react';
import styles from './Burger.css'
import BurgerIngred from './BurgerIngred/BurgerIngred'

const Burger = (props) => {

  const transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <BurgerIngred key = { ingredientKey + i } type = { ingredientKey } />
    })
  })

  return (
    <div className = {styles.Burger}>
      <BurgerIngred type = 'bread-top'/>
      {transformedIngredients}
      <BurgerIngred type = 'bread-bottom'/>
    </div>
  )
}

export default Burger