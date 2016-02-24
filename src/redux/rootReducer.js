import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import cells from './modules/cells'

export default combineReducers({
  cells,
  router
})
