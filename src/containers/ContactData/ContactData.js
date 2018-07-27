import React from 'react'
import Button from '../../components/UI/Button/Button'
import styles from './ContactData.css'

class ContactData extends React.Component {

  state = {
    name: '',
    email: '',
    address: {
      street:  '',
      postalCode: ''
    }
  }

  render() {
    return (
      <div className = {styles.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <input type="text" name="street" placeholder="Your Street" />
          <input type="text" name="postal" placeholder="Your Postal" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData

