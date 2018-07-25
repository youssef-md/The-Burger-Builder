import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary'

const CheckoutSummary = (props) => {

  return(
    <div className = {styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style = {{width: '300px', height: '300px', margin: 'auto'}}>
        <Burger ingredients = {props.ingredients}/>
      </div>
      
      <Button btnType = 'Danger' click >
        CANCEL
      </Button>
      
      <Button btnType = 'Success' click >
        CONTINUE
      </Button>

    </div>
  )
}

export default CheckoutSummary