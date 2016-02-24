import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import board from './modules/board'
import playing from './modules/playing'

export default combineReducers({
  board,
  playing,
  router
})
