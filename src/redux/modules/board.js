const makeCells = (width, height) => {
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

const setCellActionHandler = (state, action) => {
  const {x, y, live} = action.payload
  const cells = state.cells.slice()
  cells[x] = cells[x].slice()
  cells[x][y] = live
  const newState = { ...state, cells: cells }
  return newState
}

const stepActionHandler = (state, action) => {
  const newState = { ...state, cells: makeCells(state.width, state.height) }
  for (let x = 0; x < state.width; x++) {
    for (let y = 0; y < state.width; y++) {
      newState.cells[x][y] = !state.cells[x][y]
    }
  }
  return newState
}

const ACTION_HANDLERS = {
  SET_CELL: setCellActionHandler,
  STEP: stepActionHandler
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function counterReducer (state, action) {
  if (state === undefined) {
    state = {
      cells: makeCells(10, 10),
      width: 10,
      height: 10
    }
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
