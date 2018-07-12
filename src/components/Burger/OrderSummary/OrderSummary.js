import React,{ Fragment} from 'react'

const OrderSummary = (props) => {

  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return <li><b>{ igKey }</b>: {props.ingredients[igKey]}</li>
  })

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicous burger with the following ingredients:</p>
      <ul>
        { ingredientSummary }
      </ul>
      <p>Continue to checkout?</p>
    </Fragment>
  )
}

export default OrderSummary