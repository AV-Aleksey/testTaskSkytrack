import { ADD_IMG_CARD_TO_HISTORY, CHANGE_PAGE, DELETE_IMG } from './action-types'

export function addImgToHistoryAC(imgCard) {
  return {
    type: ADD_IMG_CARD_TO_HISTORY,
    imgCard
  }
}

export function changePageAC(currentPage) {
  return {
    type: CHANGE_PAGE,
    currentPage
  }
}

export function deleteImgAC(id) {
  return {
    type: DELETE_IMG,
    id
  }
}
