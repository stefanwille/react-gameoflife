const play = (state, action) => {
  return action.payload
}

const pause = (state, action) => {
  return null
}

const ACTION_HANDLERS = {
  PLAY: play,
  PAUSE: pause
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function playingReducer (state, action) {
  if (state === undefined) {
    state = null
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
