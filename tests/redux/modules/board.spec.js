import {setCell, step, randomize} from 'redux/modules/actionCreators'
import {default as cellsReducer, makeCells, neighbours} from 'redux/modules/board'

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

  describe('(Action Creator) randomize', function () {
    it('Should be exported as a function.', function () {
      expect(randomize).to.be.a('function')
    })

    it('Should return an action with type "RANDOMIZE".', function () {
      expect(randomize()).to.have.property('type', 'RANDOMIZE')
    })
  })

  describe('(Action Handler) RANDOMIZE', function () {
    it('Should randomize the cells.', function () {
      let state = cellsReducer(undefined, {})
      cellsReducer(state, randomize())
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

  describe('(Action Handler impl) neighbours', function () {
    it('Should calculate the numbers of live neighbours', function () {
      console.log('makeCells', makeCells)
      const cells = makeCells(10, 10)
      cells[0][1] = true
      cells[1][1] = true
      cells[2][1] = true
      const board = {
        cells,
        width: 10,
        height: 10
      }
      expect(neighbours(board, 0, 1)).to.equal(1)
      expect(neighbours(board, 1, 1)).to.equal(2)
      expect(neighbours(board, 2, 1)).to.equal(1)
    })
  })

  describe('(Action Handler) STEP', function () {
    it('Should step forward one generation in game of life.', function () {
      let state = cellsReducer(undefined, {})
      // Blinker pattern
      state.cells[0][1] = true
      state.cells[1][1] = true
      state.cells[2][1] = true
      state = cellsReducer(state, step())
      expect(state.cells[0][1]).to.equal(false)
      expect(state.cells[1][1]).to.equal(true)
      expect(state.cells[2][1]).to.equal(false)
      expect(state.cells[1][0]).to.equal(true)
      expect(state.cells[1][2]).to.equal(true)
    })
  })
})
