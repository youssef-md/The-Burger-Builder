import * as actionType from './actionType'

export const saveResult = (result) => {
  return {
    type: actionType.STORE_RESULT,
    result: result
  } 
}

export const storeResult = (result) => {
  
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000);
  }  
}

export const deleteResult = (resultID) => {
  return {
    type: actionType.DELETE_RESULT,
    elementID: resultID
  }
}