import React,{ Component } from 'react' 
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

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
    totalPrice: 2
  }

  render() {
    return (
      <Aux>
        <Burger ingredients = { this.state.ingredients }/>
        <BuildControls addIngredient = { this.addIngredientHandler }/>
      </Aux>
    )
  }

  addIngredientHandler = (type) => {

    this.updateIngredientCount(type)
    this.updateTotalPrice(type)
  }

  removeIngredientHandler = (type) => {

  }

  updateIngredientCount = (type) => {
    const updatedCount = this.state.ingredients[type] + 1
    const updatedIngredients = { ...this.state.ingredients } //immutable way
    updatedIngredients[type] = updatedCount
    this.setState({ ingredients: updatedIngredients })
  }

  updateTotalPrice = (type) => {
    const priceAddition = INGREDIENT_PRICES[type]
    const newPrice = this.state.totalPrice + priceAddition
    this.setState({ totalPrice: newPrice })
  }

}

export default BurgerBuilder