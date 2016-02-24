export const setCell = (x, y, live) => ({
  type: 'SET_CELL',
  payload: {x, y, live}
})

export const step = () => ({
  type: 'STEP'
})
