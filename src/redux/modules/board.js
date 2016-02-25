export const INITIAL_WIDTH = 40
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
    for (let y = 0; y < state.height; y++) {
      newState.cells[x][y] = Math.random() > 0.8
    }
  }
  return newState
}

const clearActionHandler = (state, action) => {
  return { ...state, cells: makeCells(state.width, state.height) }
}

const stepActionHandler = (state, action) => {
  const board = state
  const {width, height} = board
  const newCells = makeCells(width, height)
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      newCells[x][y] = shouldLiveInNextGeneration(board, x, y)
    }
  }
  const newBoard = {...board, cells: newCells}
  return newBoard
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
  const alive = board.cells[x][y]
  const neighbourCount = neighbours(board, x, y)
  return alive ? (neighbourCount >= 2 && neighbourCount <= 3) : (neighbourCount === 3)
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

const resizeActionHandler = (state, action) => {
  const {width, height} = action.payload
  const cells = makeCells(width, height)
  const copyWidth = Math.min(width, state.width)
  const copyHeight = Math.min(height, state.height)
  for (let x = 0; x < copyWidth; x++) {
    for (let y = 0; y < copyHeight; y++) {
      cells[x][y] = state.cells[x][y]
    }
  }
  const newState = {...state, cells: cells, width: width, height: height}
  return newState
}

const initialState = () => {
  return {
    cells: makeCells(INITIAL_WIDTH, INITIAL_HEIGHT),
    width: INITIAL_WIDTH,
    height: INITIAL_HEIGHT
  }
}

const ACTION_HANDLERS = {
  SET_CELL: setCellActionHandler,
  RANDOMIZE: randomizeActionHandler,
  STEP: stepActionHandler,
  RESIZE: resizeActionHandler,
  CLEAR: clearActionHandler
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state, action) {
  if (state === undefined) {
    state = initialState()
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
