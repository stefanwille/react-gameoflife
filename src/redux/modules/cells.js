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
  const newState = state.slice()
  newState[x] = state[x].slice()
  newState[x][y] = live
  return newState
}

const stepActionHandler = (state, action) => {
  const width = state.length
  const height = state[0].length
  const newState = makeCells(width, height)
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < width; y++) {
      newState[x][y] = !state[x][y]
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
    state = makeCells(10, 10)
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
