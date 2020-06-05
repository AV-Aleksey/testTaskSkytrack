import {
  ADD_IMG_CARD_TO_HISTORY, CHANGE_PAGE
} from '../Actions/action-types'


const initialState = {
  imgCollection: [],
  pageSize: 2,
  currentPage: 1,
}

export function historyReducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: +action.currentPage
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
