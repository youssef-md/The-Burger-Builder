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
          <input className = { styles.Input } type="text" name="name" placeholder="Your Name" />
          <input className = { styles.Input } type="email" name="email" placeholder="Your Email" />
          <input className = { styles.Input } type="text" name="street" placeholder="Your Street" />
          <input className = { styles.Input } type="text" name="postal" placeholder="Your Postal" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData

