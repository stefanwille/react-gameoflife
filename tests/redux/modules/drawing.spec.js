import {setDrawingCell} from 'redux/modules/actionCreators'
import {default as drawingReducer} from 'redux/modules/drawing'

describe('(Redux Module) playing', function () {
  describe('(Reducer)', function () {
    it('Should initialize with a false', function () {
      const initialState = drawingReducer(undefined, {})
      expect(initialState).to.equal(false)
    })
  })

  describe('(Action Creator) setDrawingCell', function () {
    it('Should be exported as a function.', function () {
      expect(setDrawingCell).to.be.a('function')
    })
  })

  describe('(Action Handler) SET_DRAWING_CELL', function () {
    it('Should set the state to the given cell state.', function () {
      let state = drawingReducer(undefined, {})
      expect(state).to.equal(false)
      state = drawingReducer(state, {type: 'SET_DRAWING_CELL', payload: true})
      expect(state).to.equal(true)
    })
  })
})
