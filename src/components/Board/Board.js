import React from 'react'
import {connect} from 'react-redux'

// import classes from './GameOfLife.scss'

let Board = ({cells, width, height}) => {
  const rowsWithCells = []
  for (let y = 0; y < height; y++) {
    const cellsElements = []
    for (let x = 0; x < width; x++) {
      const cellClassName = cells[x][y] ? 'alive' : 'dead'
      const cellKey = `${x}-${y}`
      cellsElements.push(
        <td key={cellKey} className={cellClassName}></td>
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

Board = connect(mapStateToProps, null)(Board)

export default Board
