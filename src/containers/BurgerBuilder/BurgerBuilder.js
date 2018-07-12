import React,{ Component, Fragment } from 'react' 
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 2,
    purchasable: false,
    ordering: false,
  }

  render() {

    const disabledInfo = this.checkToDisableButton()
    return (
      <Fragment>
        <Modal show = { this.state.ordering }> 
          <OrderSummary ingredients = {this.state.ingredients} />
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