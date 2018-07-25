import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import styles from './CheckoutSummary.css'

const CheckoutSummary = (props) => {

  return(
    <div className = {styles.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style = {{width: '100%',  margin: 'auto'}}>
        <Burger ingredients = {props.ingredients}/>
      </div>
      
      <div className = {styles.Buttons}>
        <Button btnType = 'Danger' click >
          CANCEL
        </Button>
        
        <Button btnType = 'Success' click >
          CONTINUE
        </Button>
      </div>

    </div>
  )
}

export default CheckoutSummary