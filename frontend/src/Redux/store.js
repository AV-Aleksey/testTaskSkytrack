import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
//Reducers
import { commonReducer } from './Reducers/commonReducer'
import { historyReducer } from './Reducers/historyReducer'
import { homeReducer } from './Reducers/homeReducer'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  commonReducer,
  historyReducer,
  homeReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)))

export default store
