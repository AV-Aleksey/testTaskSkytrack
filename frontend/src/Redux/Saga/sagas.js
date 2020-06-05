import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_IMG } from '../Actions/action-types'
import { loadedImgAC, loadingStartAC } from '../Actions/actions-home'
import { addImgToHistoryAC } from '../Actions/actions-history'

export function* sagaWatcher() {
  yield takeEvery(REQUEST_IMG, sagaWorker)
}

function* sagaWorker() {
  yield put(loadingStartAC())
  const { imgUrl, name, date } = yield call(fetchImg)
  yield put(loadedImgAC(imgUrl, name, date))
  yield put(addImgToHistoryAC({ imgUrl, name, date }))
}

async function fetchImg() {
  const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
  const json = await res.json()

  //create data
  const imgUrl = await json.data.fixed_height_downsampled_url
  const name = await json.data.title
  const date = String(new Date()).slice(16, 24)

  //cache img
  const img = new Image();
  img.src = imgUrl;
  await new Promise((resolve) => {
    img.onload = resolve;
  });

  return {
    imgUrl,
    name,
    date
  }
}
