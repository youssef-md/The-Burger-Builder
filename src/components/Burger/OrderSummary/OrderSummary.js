import React,{ Fragment} from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key = { igKey }>
        <b style = {{textTransform:'capitalize'}}>{ igKey }</b>: {props.ingredients[igKey]}
      </li>
    )
  })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p>Continue to checkout?</p>
      <Button btnType = {'Danger'} click = { props.cancel }>CANCEL</Button>
      <Button btnType = {'Success'} click = { props.submit }>CONTINUE</Button>
    </Fragment>
  )
}

export default OrderSummary