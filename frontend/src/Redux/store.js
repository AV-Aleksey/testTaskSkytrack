import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
//Reducers
import { commonReducer } from './Reducers/commonReducer'
import { historyReducer } from './Reducers/historyReducer'
import { homeReducer } from './Reducers/homeReducer'
//Sagas
import { sagaWatcher } from './Saga/sagas'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  commonReducer,
  historyReducer,
  homeReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))
saga.run(sagaWatcher)
export default store
