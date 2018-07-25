import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends React.Component {

  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      bacon: 1,
      cheese: 1
    }
  }

  render() {
    
    return (
      <div>
        <CheckoutSummary 
          ingredients = {this.state.ingredients} 
          onCheckoutCancel = {this.checkoutCancelHandler}
          onCheckoutContinue = {this.checkoutContinueHandler}/>
      </div>
    )
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack()
  }

  checkoutContinueHandler = () => {
    this.props.history.replace('/checkout/contact-data')
  }
}

export default Checkout