import React,{ Component, Fragment } from 'react' 
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'
import axios from '../../axios-orders'
import { connect } from 'react-redux'
import * as burguerBuilderActions from '../../store/actions/index'


class BurgerBuilder extends Component {

  state = {
    ordering: false,
    loading: false,
    error: false
  }

  componentDidMount() {
    this.props.onInitIngredients()
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
            totalPrice = { this.props.price.toFixed(2) }
            purchasable = { this.updatePurchasable(this.props.ings) }
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
            totalPrice = { this.props.price.toFixed(2) }/>
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

    return sum > 0
  }

  checkToDisableButton = () => {
    const ingredientsBool = { ...this.props.ings }
    for(let ingredient in ingredientsBool)
      ingredientsBool[ingredient] = ingredientsBool[ingredient] <= 0
    //{meat: true, salad: false <- disable Less btn for salad}
    return ingredientsBool
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch(burguerBuilderActions.addIngredient(ingName)),
    onIngredientRemoved: (ingName) => dispatch(burguerBuilderActions.removeIngredient(ingName)),
    onInitIngredients: () => dispatch(burguerBuilderActions.initIngredients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios))