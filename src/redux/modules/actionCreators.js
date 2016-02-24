export const setCell = (x, y, live) => ({
  type: 'SET_CELL',
  payload: {x, y, live}
})

export const play = () => ({
  type: 'PLAY'
})

export const pause = () => ({
  type: 'PAUSE'
})

export const step = () => ({
  type: 'STEP'
})

export const randomize = () => ({
  type: 'RANDOMIZE'
})
