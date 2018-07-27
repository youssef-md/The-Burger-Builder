import React from 'react'
import Button from '../../components/UI/Button/Button'
import styles from './ContactData.css'
import axios from '../../axios-orders'

class ContactData extends React.Component {

  state = {
    name: '',
    email: '',
    address: {
      street:  '',
      postalCode: ''
    },
    loading: false
  }

  render() {
    return (
      <div className = {styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input className = { styles.Input } type="text" name="name" placeholder="Your Name" />
          <input className = { styles.Input } type="email" name="email" placeholder="Your Email" />
          <input className = { styles.Input } type="text" name="street" placeholder="Your Street" />
          <input className = { styles.Input } type="text" name="postal" placeholder="Your Postal" />
          <Button btnType="Success" click = { this.orderHandler }>ORDER</Button>
        </form>
      </div>
    )
  }

  orderHandler = (event) => {
    event.preventDefault()

    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.state.totalPrice.toFixed(2), // real app: recalculate the price on the server
      deliveryMethod: 'fastest',
      customer: {
        name: 'Youssef',
        address: {
          street: 'Test Street 1',
          zipCode: '72871008',
          country: 'Brazil'
        },
        email: 'test@gmail.com'
      }
    }

    axios.post('/orders.json', order)
    .then(response => {
      this.setState({ loading: false, ordering: false })
    })
    .catch(error => {
      this.setState({ loading: false, ordering: false })
    }) 
  }

}

export default ContactData

