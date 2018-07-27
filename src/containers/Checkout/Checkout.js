import React from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from '../ContactData/ContactData'

import { Route } from 'react-router-dom'

class Checkout extends React.Component {

  state = {
    ingredients: null,
    totalPrice: 0
  }

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search)
    const ingredients = {}
    let price = 0

    for (let param of query.entries()) {
      // ['salad', '1']
      if(param[0] === 'price') {
        price = param[1]
      } else {
        ingredients[param[0]] = +param[1]
      }
    }

    this.setState({ingredients: ingredients, totalPrice: price})
  }

  render() {
    
    return (
      <div>
        <CheckoutSummary 
          ingredients = {this.state.ingredients} 
          onCheckoutCancel = {this.checkoutCancelHandler}
          onCheckoutContinue = {this.checkoutContinueHandler}/>

        <Route 
          path = {this.props.match.path + '/contact-data'} 
          render = {() => (<ContactData ingredients = { this.state.ingredients } 
                                        totalPrice = { this.state.totalPrice } />)} />
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