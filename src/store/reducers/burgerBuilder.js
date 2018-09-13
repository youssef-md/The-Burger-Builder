import * as actionTypes from '../actions/actionTypes'

const initialState = {
  ingredients: null,
  totalPrice: 2.00,
  error: false
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 1.5,
  bacon: 0.8
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // overwriting sintax
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
  
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }

    case actionTypes.SET_INGREDIENTS: 
      return {
        ...state,
        ingredients: {
          bacon: action.ingredients.bacon,
          salad: action.ingredients.salad,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false
      }
    
    case actionTypes.FETCH_INGREDIENTS_FAILED: 
      return {
        ...state,
        error: true
      }
    default:
      return state
  }
}

export default reducer