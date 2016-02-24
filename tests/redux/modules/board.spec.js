import {setCell, step} from 'redux/modules/actionCreators'
import {default as cellsReducer} from 'redux/modules/board'

describe('(Redux Module) board', function () {
  describe('(Reducer)', function () {
    it('Should initialize with a 2 dimensional array of falses and width/height', function () {
      const initialState = cellsReducer(undefined, {})
      expect(initialState).to.be.a('object')
      expect(initialState.cells.length).to.equal(10)
      expect(initialState.width).to.equal(10)
      expect(initialState.height).to.equal(10)
    })
  })

  describe('(Action Creator) setCell', function () {
    it('Should be exported as a function.', function () {
      expect(setCell).to.be.a('function')
    })

    it('Should return an action with type "SET_CELL".', function () {
      expect(setCell(0, 0, true)).to.have.property('type', 'SET_CELL')
      expect(setCell(0, 0, true).payload).to.deep.equal({x: 0, y: 0, live: true})
    })
  })

  describe('(Action Handler) SET_CELL', function () {
    it('Should set the state of a cell.', function () {
      let state = cellsReducer(undefined, {})
      expect(state.cells[0][0]).to.equal(false)
      state = cellsReducer(state, setCell(0, 0, true))
      expect(state.cells[0][0]).to.equal(true)
    })
  })

  describe('(Action Creator) step', function () {
    it('Should be exported as a function.', function () {
      expect(step).to.be.a('function')
    })

    it('Should return an action with type "STEP".', function () {
      expect(step()).to.have.property('type', 'STEP')
    })
  })

  describe('(Action Handler) STEP', function () {
    it('Should step forward one generation in game of life.', function () {
      let state = cellsReducer(undefined, {})
      expect(state.cells[0][0]).to.equal(false)
      state = cellsReducer(state, step())
      expect(state.cells[0][0]).to.equal(true)
    })
  })
})
