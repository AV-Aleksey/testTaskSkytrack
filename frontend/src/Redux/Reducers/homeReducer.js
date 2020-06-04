import {
  LOADING,
} from '../Actions/action-types'


const initialState = {

}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      console.log('LOADING')
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}
