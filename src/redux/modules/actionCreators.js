export const setCell = (x, y, live) => ({
  type: 'SET_CELL',
  payload: {x, y, live}
})

export const play = () => ({
  type: 'PLAY',
  payload: true
})

export const pause = () => ({
  type: 'PAUSE'
})

export const setSpeed = (speed) => ({
  type: 'SET_SPEED',
  payload: speed
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

export const setDrawingCell = (alive) => ({
  type: 'SET_DRAWING_CELL',
  payload: alive
})
