import React,{ Component, Fragment } from 'react' 
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      cheese: 0,
      salad: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 2,
    purchasable: false,
    ordering: false,
    loading: false
  }

  render() {

    const disabledInfo = this.checkToDisableButton()

    return (
      <Fragment>
        <Modal show = { this.state.ordering } modalClose = { this.cancelPurchaseHandler }> 
          { this.loadOrderSummary() }
        </Modal>
        <Burger ingredients = { this.state.ingredients }/>
        <BuildControls 
          addIngredient = { this.addIngredientHandler }
          removeIngredient = { this.removeIngredientHandler }
          disabled = { disabledInfo }
          totalPrice = { this.state.totalPrice }
          purchasable = { this.state.purchasable }
          order = { this.orderHandler }/>
      </Fragment>
    )
  }

  
  loadOrderSummary = () => {
    if(this.state.loading)
      return <Spinner />
    else{
      return( <OrderSummary 
                ingredients = {this.state.ingredients} 
                cancel = { this.cancelPurchaseHandler }
                submit = { this.submitPurchaseHandler }
                totalPrice = { this.state.totalPrice }/>)
    }
  }

  submitPurchaseHandler = () => {
    //alert('Purchased')
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
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

  cancelPurchaseHandler = () => {
    this.setState({ ordering: false })
  }

  orderHandler = () => {
    this.setState({ ordering: true })
  }

  updatePurchasable = (updatedIngredients) => {
    
    const sum = Object.keys(updatedIngredients).map(igKey => {
      return updatedIngredients[igKey] // [0, 0, 0, 1]
    })
    .reduce((sum, elem) => {
      return sum + elem // if sum === 0, there is no ingredients
    }, 0)

    this.setState({purchasable: sum > 0})
  }

  checkToDisableButton = () => {
    const ingredientsBool = { ...this.state.ingredients }
    for(let ingredient in ingredientsBool)
      ingredientsBool[ingredient] = ingredientsBool[ingredient] <= 0
    //{meat: true, salad: false <- disable Less btn for salad}
    return ingredientsBool
  }

  addIngredientHandler = (type) => {
    this.addIngredientCount(type)
    this.addTotalPrice(type)
  }

  removeIngredientHandler = (type) => {
    this.subtractIngredientCount(type)
    this.subtractTotalPrice(type)
  }

  addIngredientCount = (type) => {
    const updatedCount = this.state.ingredients[type] + 1
    const updatedIngredients = { ...this.state.ingredients } //immutable way
    updatedIngredients[type] = updatedCount
    this.setState({ ingredients: updatedIngredients })
    this.updatePurchasable(updatedIngredients)
  }

  subtractIngredientCount = (type) => {
    const updatedCount = this.state.ingredients[type] - 1
    const updatedIngredients = { ...this.state.ingredients } //immutable way
    updatedIngredients[type] = updatedCount
    this.setState({ ingredients: updatedIngredients })
    this.updatePurchasable(updatedIngredients)
  }

  addTotalPrice = (type) => {
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice + priceAddition
    this.setState({ totalPrice: newPrice })  
  }

  subtractTotalPrice = (type) => {
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice - priceAddition
    this.setState({ totalPrice: newPrice })  
  }
}

export default BurgerBuilder