import {
  ERROR, CLOSE__ERROR,
} from '../Actions/action-types'


const initialState = {
  error: false,
  errorMessage: 'Что-то пошло не так!'
}

export function commonReducer(state = initialState, action) {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.errorText
      }

    case CLOSE__ERROR:
      return {
        ...state,
        error: false,
      }

    default:
      return state
  }
}
