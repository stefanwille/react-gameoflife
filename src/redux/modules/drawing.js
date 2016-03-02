const setDrawingCell = (state, action) => {
  return action.payload
}

const ACTION_HANDLERS = {
  SET_DRAWING_CELL: setDrawingCell
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function drawingReducer (state, action) {
  if (state === undefined) {
    state = false
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
