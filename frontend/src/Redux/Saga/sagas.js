import { takeEvery, put, call } from 'redux-saga/effects'
import { REQUEST_IMG } from '../Actions/action-types'
import { loadedImgAC, loadingStartAC } from '../Actions/actions-home'
import { showErrorAC } from '../Actions/actions-common'
import { addImgToHistoryAC } from '../Actions/actions-history'


//Add IMG Saga
export function* sagaWatcherAdd() {
  yield takeEvery(REQUEST_IMG, sagaWorker)
}

function* sagaWorker() {
  yield put(loadingStartAC())
  const { imgUrl, name, date, id, error } = yield call(fetchImg)
  if (!error) {
    yield put(loadedImgAC(imgUrl, name, date, id))
    yield put(addImgToHistoryAC({ imgUrl, name, date, id }))
  } else {
    yield put(showErrorAC(error))
  }
}

async function fetchImg() {
  try {
    const res = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
    const json = await res.json()

    //create data
    const id = await json.data.id
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
      id,
      imgUrl,
      name,
      date,
    }
  } catch (error) {
    return {
      error: error.message
    }
  }

}




