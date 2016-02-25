import React from 'react'

import HeadLine from 'components/HeadLine/HeadLine'
import Controls from 'components/Controls/Controls'
import Board from 'components/Board/Board'
import Dimensions from 'components/Dimensions/Dimensions'
import PlayLoop from 'components/PlayLoop/PlayLoop'

import classes from './GameOfLife.scss'

const GameOfLife = () => {
  return (
    <div className={classes.gameOfLife}>

      <HeadLine />
      <Controls />
      <Board />
      <Dimensions />
      <PlayLoop />

    </div>
  )
}

export default GameOfLife
