import React,{ Fragment} from 'react'
import Button from '../../UI/Button/Button'

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <p key = { igKey }>
        <b style = {{textTransform:'capitalize'}}>{ igKey }</b>: {props.ingredients[igKey]}
      </p>
    )
  })

  return (
    <Fragment>
      <h3 style = {{textAlign: 'center'}}>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>

      { ingredientSummary }

      <b>TOTAL: ${props.totalPrice}</b>
      <p>Continue to checkout?</p>
      <Button btnType = {'Danger'} click = { props.cancel }>CANCEL</Button>
      <Button btnType = {'Success'} click = { props.submit }>CONTINUE</Button>
    </Fragment>
  )
}

export default OrderSummary