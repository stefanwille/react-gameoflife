import {setCell, step, randomize, resize, clear} from 'redux/modules/actionCreators'
import {default as boardReducer, makeCells, neighbours, INITIAL_WIDTH, INITIAL_HEIGHT} from 'redux/modules/board'

describe('(Redux Module) board', function () {
  describe('(Reducer)', function () {
    it('Should initialize with a 2 dimensional array of {live, liveCount} and width/height', function () {
      const initialState = boardReducer(undefined, {})
      expect(initialState).to.be.a('object')
      expect(initialState.cells.length).to.equal(INITIAL_WIDTH)
      expect(initialState.width).to.equal(INITIAL_WIDTH)
      expect(initialState.height).to.equal(INITIAL_HEIGHT)
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
      let state = boardReducer(undefined, {})
      expect(state.cells[0][0]).to.deep.equal({live: false, liveCount: 0})
      state = boardReducer(state, setCell(0, 0, true))
      expect(state.cells[0][0]).to.deep.equal({live: true, liveCount: 1})
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
      let state = boardReducer(undefined, {})
      boardReducer(state, randomize())
    })
  })

  describe('(Action Creator) clear', function () {
    it('Should be exported as a function.', function () {
      expect(clear).to.be.a('function')
    })

    it('Should return an action with type "CLEAR".', function () {
      expect(clear()).to.have.property('type', 'CLEAR')
    })
  })

  describe('(Action Handler) CLEAR', function () {
    it('Should randomize the cells.', function () {
      let state = boardReducer(undefined, {})
      state.cells[0][0] = {live: true, liveCount: 3}
      state = boardReducer(state, clear())
      expect(state.cells[0][0]).to.deep.equal({live: false, liveCount: 0})
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
      cells[0][1] = {live: true, liveCount: 1}
      cells[1][1] = {live: true, liveCount: 1}
      cells[2][1] = {live: true, liveCount: 1}
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

  describe('(Action Handler impl) neighbours', function () {
    it('Should calculate the numbers of live neighbours', function () {
      console.log('makeCells', makeCells)
      const cells = makeCells(10, 10)
      cells[0][1] = {live: true, liveCount: 1}
      cells[1][1] = {live: true, liveCount: 1}
      cells[2][1] = {live: true, liveCount: 1}
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
      let state = boardReducer(undefined, {})
      // Blinker pattern
      state.cells[0][1] = {live: true, liveCount: 1}
      state.cells[1][1] = {live: true, liveCount: 1}
      state.cells[2][1] = {live: true, liveCount: 1}
      state = boardReducer(state, step())
      expect(state.cells[0][1]).to.deep.equal({live: false, liveCount: 1})
      expect(state.cells[1][1]).to.deep.equal({live: true, liveCount: 2})
      expect(state.cells[2][1]).to.deep.equal({live: false, liveCount: 1})
      expect(state.cells[1][0]).to.deep.equal({live: true, liveCount: 1})
      expect(state.cells[1][2]).to.deep.equal({live: true, liveCount: 1})
    })
  })

  describe('(Action Creator) RESIZE', function () {
    it('Should be exported as a function.', function () {
      expect(resize).to.be.a('function')
    })

    it('Should return an action with type "RESIZE".', function () {
      expect(resize(10, 10)).to.have.property('type', 'RESIZE')
      expect(resize(11, 12).payload).to.deep.equal({width: 11, height: 12})
    })
  })

  describe('(Action Handler) RESIZE', function () {
    it('Should change the size of the board.', function () {
      let state = boardReducer(undefined, {})
      expect(state.width).to.equal(INITIAL_WIDTH)
      expect(state.height).to.equal(INITIAL_HEIGHT)
      state = boardReducer(state, resize(11, 12))
      expect(state.width).to.equal(11)
      expect(state.height).to.equal(12)
      expect(state.cells.length).to.equal(11)
      expect(state.cells[0].length).to.equal(12)
    })
  })
})
