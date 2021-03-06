import {
  LOADED_IMG, LOADING_START,
} from '../Actions/action-types'


const initialState = {
  imgUrl: '',
  date: '',
  name: '',
  id: '',
  isLoaded: false,
}

export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoaded: false
      }

    case LOADED_IMG:
      return {
        ...state,
        imgUrl: action.imgUrl,
        date: action.date,
        name: action.name,
        id: action.id,
        isLoaded: true,
      }
    default:
      return state
  }
}
