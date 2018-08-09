import * as actionType from '../actions'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case actionType.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      }
    case actionType.DELETE_RESULT:
      const updatedResults = state.results.filter(el => el.id !== action.elementID)
      return {
       ...state,
       results: updatedResults
      }
    default:
      return state
  }
}

export default reducer