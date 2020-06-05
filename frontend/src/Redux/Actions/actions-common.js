import {
  ERROR, CLOSE__ERROR,
} from '../Actions/action-types'


export function showErrorAC(errorText) {
  return {
    type: ERROR,
    errorText,
  }
}

export function closeErrorAC() {
  return {
    type: CLOSE__ERROR,
  }
}

