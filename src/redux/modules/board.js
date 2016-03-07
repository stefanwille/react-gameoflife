export const INITIAL_WIDTH = 40
export const INITIAL_HEIGHT = 20
export const INITIAL_CELL_STATE = {live: false, liveCount: 0}

export const makeCells = (width, height) => {
  const cells = []
  for (let x = 0; x < width; x++) {
    const row = []
    cells.push(row)
    for (let y = 0; y < height; y++) {
      row.push(INITIAL_CELL_STATE)
    }
  }

  return cells
}

const setCellActionHandler = (state, action) => {
  const {x, y, live} = action.payload
  const oldCell = state.cells[x][y]
  const cells = state.cells.slice()
  cells[x] = cells[x].slice()
  const liveCount = oldCell.liveCount + (live ? 1 : 0)
  cells[x][y] = {live: live, liveCount: liveCount}
  const newState = { ...state, cells: cells }
  return newState
}

const randomizeActionHandler = (state, action) => {
  const newState = { ...state, cells: makeCells(state.width, state.height) }
  for (let x = 0; x < state.width; x++) {
    for (let y = 0; y < state.height; y++) {
      const live = Math.random() < 0.1
      const liveCount = live ? 1 : 0
      newState.cells[x][y] = {live, liveCount}
    }
  }
  return newState
}

const clearActionHandler = (state, action) => {
  return { ...state, cells: makeCells(state.width, state.height) }
}

const stepActionHandler = (state, action) => {
  const board = state
  const {width, height, cells} = board
  const newCells = makeCells(width, height)
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      stepForCell(x, y, board, cells, newCells)
    }
  }
  const newBoard = {...board, cells: newCells}
  return newBoard
}

const stepForCell = (x, y, board, cells, newCells) => {
  const newCell = cellInNextGeneration(board, x, y)
  newCells[x][y] = newCell
  // console.log('stepForCell', x, y, 'newCells newLive', newLive,
  // 'liveCount', newLiveCount, 'oldLiveCount', oldLiveCount)
}

const cellInNextGeneration = (board, x, y) => {
  const live = board.cells[x][y].live
  const liveCount = board.cells[x][y].liveCount
  const neighbourCount = neighbours(board, x, y)
  const newLive = shouldCellLiveInNextGeneration(live, neighbourCount)
  const newLiveCount = liveCount + (newLive ? 1 : 0)
  return {live: newLive, liveCount: newLiveCount}
}

const shouldCellLiveInNextGeneration = (live, neighbourCount) => {
  if (live) {
    return neighbourCount >= 2 && neighbourCount <= 3
  } else {
    return neighbourCount === 3
  }
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
  return board.cells[x][y].live ? 1 : 0
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
export default function boardReducer (state, action) {
  if (state === undefined) {
    state = initialState()
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
