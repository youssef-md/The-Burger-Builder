import React,{ Component, Fragment } from 'react' 
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import { connect } from 'react-redux'
import * as actionType from '../../store/actions'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

class BurgerBuilder extends Component {

  state = {
    totalPrice: 2,
    purchasable: false,
    ordering: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    /* axios.get('https://theburgerbuilder-4b0a1.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data})
      })
      .catch(error => this.setState({error:true})) */
  }

  render() {

    return (
      <Fragment>
        <Modal show = { this.state.ordering } modalClose = { this.cancelPurchaseHandler }> 
          { this.loadOrderSummary() }
        </Modal>
        { this.loadBurger() }
      </Fragment>
    )
  }

  loadBurger = () => {
    if(this.props.ings) {
      const disabledInfo = this.checkToDisableButton()
      return (
        <Fragment>
          <Burger ingredients = { this.props.ings }/>
          <BuildControls 
            addIngredient = { this.props.onIngredientAdded }
            removeIngredient = { this.props.onIngredientRemoved }
            disabled = { disabledInfo }
            totalPrice = { this.state.totalPrice }
            purchasable = { this.state.purchasable }
            order = { this.orderHandler }/>
        </Fragment>
      )
    } else {
      return !this.state.error ? <Spinner/> : <p style = {{textAlign: 'center'}}>Error while getting the ingredients</p>
    }
  }

  loadOrderSummary = () => {
    if(this.state.loading)
      return <Spinner />
    else{
      if(this.props.ings){
        return( 
          <OrderSummary 
            ingredients = {this.props.ings} 
            cancel = { this.cancelPurchaseHandler }
            submit = { this.submitPurchaseHandler }
            totalPrice = { this.state.totalPrice }/>
        )
      }
    }
  }

  submitPurchaseHandler = () => {

    this.props.history.push('/checkout')
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
    const ingredientsBool = { ...this.props.ings }
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

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({ type: actionType.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) => dispatch({ type: actionType.REMOVE_INGREDIENT, ingredientName: ingName })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))