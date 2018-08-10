import React from 'react';
import styles from './Burger.css'
import BurgerIngred from './BurgerIngred/BurgerIngred'

const Burger = (props) => {

  let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
    return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
      return <BurgerIngred key = { ingredientKey + i } type = { ingredientKey } />
    })
  }).reduce((arr, elem) => {
    return arr.concat(elem)
  }, [])

  if(transformedIngredients.length === 0)
    transformedIngredients = <p>Add some ingredients!</p>

  return (
    <div className = {styles.Burger}>
      <BurgerIngred type = 'bread-top'/>
      {transformedIngredients}
      <BurgerIngred type = 'bread-bottom'/>
    </div>
  )
}

export default Burger