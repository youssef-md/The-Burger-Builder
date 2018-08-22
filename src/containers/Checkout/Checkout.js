import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

class Checkout extends React.Component {

  render() {
    
    return (
      <div>
        <CheckoutSummary 
          ingredients = {this.props.ings} 
          onCheckoutCancel = {this.checkoutCancelHandler}
          onCheckoutContinue = {this.checkoutContinueHandler}/>

        <Route 
          path = { this.props.match.path + '/contact-data'} 
          component = { ContactData }
        />
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice  
  }
}

export default connect(mapStateToProps)(Checkout)