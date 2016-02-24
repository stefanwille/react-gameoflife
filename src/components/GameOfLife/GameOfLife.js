import React from 'react'

import Controls from 'components/Controls/Controls'
import Board from 'components/Board/Board'
import Dimensions from 'components/Dimensions/Dimensions'
import classes from './GameOfLife.scss'

const GameOfLife = () => {
  return (
    <div className={classes.gameOfLife}>

      <div className='row headline'>
        <div className='col-md-12 text-center'>
          <h1>Game of Life</h1>
        </div>
      </div>

      <Controls />
      <Board />
      <Dimensions />

    </div>
  )
}

export default GameOfLife
