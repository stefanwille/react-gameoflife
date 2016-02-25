export const setCell = (x, y, live) => ({
  type: 'SET_CELL',
  payload: {x, y, live}
})

export const play = (dispatch) => {
  const thunk = () => {
    const interval = setInterval(() => {
      dispatch(step())
    }, 800)

    dispatch({type: 'PLAY', payload: interval})
  }

  return thunk
}

export const pause = () => ({
  type: 'PAUSE'
})

export const step = () => ({
  type: 'STEP'
})

export const randomize = () => ({
  type: 'RANDOMIZE'
})

export const resize = (width, height) => ({
  type: 'RESIZE',
  payload: {width, height}
})

export const clear = () => ({
  type: 'CLEAR'
})

export const setSpeed = (speed) => ({
  type: 'SET_SPEED', payload: speed
})
