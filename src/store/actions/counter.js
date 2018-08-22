import * as actionType from './actionType'

export const increment = () => {
  return {
    type: actionType.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionType.DECREMENT
  }
}

export const add = (value) => {
  return {
    type: actionType.ADD,
    value: value
  }
}

export const subtract = (value) => {
  return {
    type: actionType.SUBTRACT,
    value: value
  }
}
