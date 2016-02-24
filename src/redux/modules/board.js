export const INITIAL_WIDTH = 20
export const INITIAL_HEIGHT = 20

const setCellActionHandler = (state, action) => {
  const {x, y, live} = action.payload
  const cells = state.cells.slice()
  cells[x] = cells[x].slice()
  cells[x][y] = live
  const newState = { ...state, cells: cells }
  return newState
}

const randomizeActionHandler = (state, action) => {
  const newState = { ...state, cells: makeCells(state.width, state.height) }
  for (let x = 0; x < state.width; x++) {
    for (let y = 0; y < state.width; y++) {
      newState.cells[x][y] = Math.random() > 0.8
    }
  }
  return newState
}

const stepActionHandler = (state, action) => {
  const newState = { ...state, cells: makeCells(state.width, state.height) }
  for (let x = 0; x < state.width; x++) {
    for (let y = 0; y < state.width; y++) {
      newState.cells[x][y] = shouldLiveInNextGeneration(state, x, y)
    }
  }
  return newState
}

export const makeCells = (width, height) => {
  const cells = []
  for (let x = 0; x < width; x++) {
    const row = []
    cells.push(row)
    for (let y = 0; y < height; y++) {
      row.push(false)
    }
  }

  return cells
}

const shouldLiveInNextGeneration = (board, x, y) => {
  const n = neighbours(board, x, y)
  return (board.cells[x][y]) ? (n >= 2 && n <= 3) : (n === 3)
}

export const neighbours = (board, x, y) => {
  return aliveCellsAt(board, x-1, y-1) +
     aliveCellsAt(board, x, y-1) +
     aliveCellsAt(board, x+1, y-1) +
     aliveCellsAt(board, x-1, y) +
     aliveCellsAt(board, x+1, y) +
     aliveCellsAt(board, x-1, y+1) +
     aliveCellsAt(board, x, y+1) +
     aliveCellsAt(board, x+1, y+1)
}

const aliveCellsAt = (board, x, y) => {
  if (x < 0 || x >= board.width) {
    return 0
  }
  if (y < 0 || y >= board.height) {
    return 0
  }
  return board.cells[x][y] ? 1 : 0
}

const ACTION_HANDLERS = {
  SET_CELL: setCellActionHandler,
  RANDOMIZE: randomizeActionHandler,
  STEP: stepActionHandler
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state, action) {
  if (state === undefined) {
    state = {
      cells: makeCells(INITIAL_WIDTH, INITIAL_HEIGHT),
      width: INITIAL_WIDTH,
      height: INITIAL_HEIGHT
    }
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
