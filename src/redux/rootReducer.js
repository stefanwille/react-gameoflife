import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import board from './modules/board'
import playing from './modules/playing'
import speed from './modules/speed'
import drawing from './modules/drawing'

export default combineReducers({
  board,
  playing,
  speed,
  drawing,
  router
})
