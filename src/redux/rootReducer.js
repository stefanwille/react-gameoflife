import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import board from './modules/board'

export default combineReducers({
  board,
  router
})
