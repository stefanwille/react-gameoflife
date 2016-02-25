export const INITIAL_SPEED = 100

const setSpeed = (state, action) => {
  return action.payload
}

const ACTION_HANDLERS = {
  SET_SPEED: setSpeed
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function speedReducer (state, action) {
  if (state === undefined) {
    state = INITIAL_SPEED
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
