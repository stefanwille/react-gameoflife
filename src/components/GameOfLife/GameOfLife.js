import React from 'react'

import Controls from 'components/Controls/Controls'
import Board from 'components/Board/Board'
import Dimensions from 'components/Dimensions/Dimensions'
import PlayLoop from 'components/PlayLoop/PlayLoop'
import classes from './GameOfLife.scss'

const GameOfLife = () => {
  return (
    <div className={classes.gameOfLife}>

      <div className='row headline'>
        <div className='col-md-12'>
          <h1>Game of Life</h1>
        </div>
      </div>

      <Controls />
      <Board />
      <Dimensions />
      <PlayLoop />

    </div>
  )
}

export default GameOfLife
