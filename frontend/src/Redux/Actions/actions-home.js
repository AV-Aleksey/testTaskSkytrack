import { REQUEST_IMG, LOADED_IMG, LOADING_START } from './action-types'

export function requestImgAC() {
  return {
    type: REQUEST_IMG,
  }
}

export function loadedImgAC(imgUrl, name, date, id) {
  return {
    type: LOADED_IMG,
    imgUrl,
    name,
    date,
    id
  }
}

export function loadingStartAC() {
  return {
    type: LOADING_START
  }
}
