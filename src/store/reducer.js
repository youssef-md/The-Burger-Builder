import * as actionType from './actions'

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  },
  totalPrice: 2
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionType.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1 // overwriting sintax
        }
      }
  
    case actionType.REMOVE_INGREDIENT:

    default:
      return state
  }
}

export default reducer