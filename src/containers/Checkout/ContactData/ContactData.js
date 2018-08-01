import React from 'react'
import Button from '../../../components/UI/Button/Button'
import styles from './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends React.Component {

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'your name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'zip code'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'email'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: ''
      },
    },
    loading: false
  }

  render() {
    return (
      <div className = {styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        { this.loadingForm() }
      </div>
    )
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice, // real app: recalculate the price on the server
      
    }

    axios.post('/orders.json', order)
    .then(response => {
      this.setState({ loading: false })
      this.props.history.push('/')
    })
    .catch(error => {
      this.setState({ loading: false })
    }) 
  }

  loadingForm = () => {
    if(this.state.loading)
      return <Spinner />
    else {
      return (
        <form>
          <Input elementType="" elementConfig="" value="" />
          <Button btnType="Success" click = { this.orderHandler }>ORDER</Button>
        </form>
      )
    }
  }

}

export default ContactData

