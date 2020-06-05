import { REQUEST_IMG, LOADED_IMG, LOADING_START } from './action-types'

export function requestImgAC() {
  return {
    type: REQUEST_IMG,
  }
}

export function loadedImgAC(imgUrl, name, date) {
  return {
    type: LOADED_IMG,
    imgUrl,
    name,
    date
  }
}

export function loadingStartAC() {
  return {
    type: LOADING_START
  }
}
