import * as actionType from '../actions/actionTypes'

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
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // overwriting sintax
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      }
  
    case actionType.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
      }

    default:
      return state
  }
}



export default reducer