import {
  ADD_IMG_CARD_TO_HISTORY, CHANGE_PAGE, DELETE_IMG
} from '../Actions/action-types'


const initialState = {
  imgCollection: [],
  pageSize: 6,
  currentPage: 1,
}

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: +action.currentPage
      }

    case DELETE_IMG:
      return {
        ...state,
        imgCollection: state.imgCollection.filter(card => card.id !== action.id ? card : false)
      }

    case ADD_IMG_CARD_TO_HISTORY:
      return {
        ...state,
        imgCollection: [...state.imgCollection, { ...action.imgCard }]
      }

    default:
      return state
  }
}
