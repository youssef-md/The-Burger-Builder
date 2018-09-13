import React, {Fragment} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Checkout extends React.Component {

  render() {

    let summary = <Redirect to="/" />
    if(this.props.ings) {
      summary = (
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

    return (
      <Fragment>
        { summary }
      </Fragment>
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
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice  
  }
}

export default connect(mapStateToProps)(Checkout)