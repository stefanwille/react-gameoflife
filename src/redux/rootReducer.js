import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import board from './modules/board'
import playing from './modules/playing'
import speed from './modules/speed'

export default combineReducers({
  board,
  playing,
  speed,
  router
})
