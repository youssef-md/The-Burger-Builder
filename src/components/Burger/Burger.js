import React from 'react';
import styles from './Burger.css'
import BurgerIngred from './BurgerIngred/BurgerIngred'

const Burger = (props) => {
  return (
    <div className = {styles.Burger}>
      <BurgerIngred type = 'bread-top'/>
      <BurgerIngred type = 'cheese'/>
      <BurgerIngred type = 'meat'/>
      <BurgerIngred type = 'bread-bottom'/>
    </div>
  )
}

export default Burger