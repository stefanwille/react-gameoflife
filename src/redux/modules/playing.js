const play = (state, action) => {
  return true
}

const pause = (state, action) => {
  return false
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
    state = false
  }

  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
