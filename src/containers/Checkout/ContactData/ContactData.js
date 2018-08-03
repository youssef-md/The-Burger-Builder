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
          placeholder: 'name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 15
        },
        valid: false,
        touched: false,
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'street'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 35
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'zip code'
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 7
        },
        valid: false,
        touched: false,
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'country'
        },
        value: '',
        validation: {
          required: true,
          minLength: 8,
          maxLength: 10
        },
        valid: false,
        touched: false,
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'email'
        },
        value: '',
        validation: {
          required: true,
          minLength: 10,
          maxLength: 15
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: 'fastest'
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

  checkValidity = (value, rules) => {

    if((value.length >= rules.minLength) && (value.length <= rules.maxLength)) {
      return true
    } else {
      return false
    }
  }

  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    
    const formData = {}
    for(let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value
    }
    console.log(formData)
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice, // real app: recalculate the price on the server
      orderData: formData 
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
      const formElementsArray = []
      for(let key in this.state.orderForm) {
        formElementsArray.push({
          id: key,
          config: this.state.orderForm[key]
        })
      }
      return (
        <form onSubmit = { this.orderHandler }>
          { formElementsArray.map(formElement =>(
            <Input 
              key = { formElement.id }
              elementType = { formElement.config.elementType } 
              elementConfig = { formElement.config.elementConfig } 
              value = { formElement.config.value } 
              onChangeHandler = { (event) => this.inputOnChangeHandler(event, formElement.id) }
              valid = { formElement.config.valid }
              shouldValidate = { formElement.config.validation }
              touched = { formElement.config.touched }
            />
          ))}
          <Button btnType="Success">ORDER</Button>
        </form>
      )
    }
  }

  inputOnChangeHandler = (event, inputID) => {
    const updatedOrderForm = {
      ...this.state.orderForm
    }
    const updatedFormElement = {
      ...updatedOrderForm[inputID]
    }

    updatedFormElement.value = event.target.value
    
    if(updatedFormElement.elementType !== 'select')
      updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
    
    if(updatedFormElement.value !== '')
      updatedFormElement.touched = true
    else 
      updatedFormElement.touched = false
  
    updatedOrderForm[inputID] = updatedFormElement
    this.setState({ orderForm: updatedOrderForm })
  }
}

export default ContactData

