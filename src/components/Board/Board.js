import React from 'react'
import {connect} from 'react-redux'

import Cell from 'components/Cell/Cell'
import {setCell} from 'redux/modules/actionCreators'

// import classes from './GameOfLife.scss'

let Board = ({cells, width, height, onToggleCell}) => {
  const rowsWithCells = []

  for (let y = 0; y < height; y++) {
    const cellsElements = []
    for (let x = 0; x < width; x++) {
      const cellKey = `${x}-${y}`
      cellsElements.push(
        <Cell key={cellKey} x={x} y={y} alive={cells[x][y]} onClick={onToggleCell} />
      )
    }
    rowsWithCells.push(
      <tr key={y}>{cellsElements}</tr>
    )
  }

  return (
    <div className='row cells'>
      <div className='col-md-12'>
        <table>
          <tbody>
            {rowsWithCells}
          </tbody>
        </table>

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const {cells, width, height} = state.board
  return {cells, width, height}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleCell (x, y, alive) {
      dispatch(setCell(x, y, !alive))
    }
  }
}

Board = connect(mapStateToProps, mapDispatchToProps)(Board)

export default Board
