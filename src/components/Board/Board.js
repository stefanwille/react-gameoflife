import React, {PropTypes} from 'react'
import {connect} from 'react-redux'

import Cell from 'components/Cell/Cell'
import {setCell, setDrawingCell} from 'redux/modules/actionCreators'

import './Board.scss'

class BoardPresentation extends React.Component {
  static propTypes = {
    cells: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    drawingCell: PropTypes.bool.isRequired,
    onStartDrawing: PropTypes.func.isRequired,
    onDraw: PropTypes.func.isRequired
  };

  render () {
    const {cells, width, height, drawingCell, onStartDrawing, onDraw} = this.props
    const rowsWithCells = []

    for (let y = 0; y < height; y++) {
      const cellElements = []
      for (let x = 0; x < width; x++) {
        const alive = cells[x][y]
        const key = x*10000+y
        cellElements.push(
          <Cell
            key={key}
            x={x}
            y={y}
            alive={alive}
            drawingCell={drawingCell}
            onStartDrawing={onStartDrawing}
            onDraw={onDraw}
          />
        )
      }
      rowsWithCells.push(
        <tr key={y}>{cellElements}</tr>
      )
    }

    return (
      <div className='row Board'>
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
}

const mapStateToProps = (state) => {
  const {cells, width, height} = state.board
  const drawingCell = state.drawing
  return {cells, width, height, drawingCell}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartDrawing (x, y, drawingCell) {
      dispatch(setDrawingCell(drawingCell))
      dispatch(setCell(x, y, drawingCell))
    },

    onDraw (x, y, drawingCell) {
      dispatch(setCell(x, y, drawingCell))
    }
  }
}

const Board = connect(mapStateToProps, mapDispatchToProps)(BoardPresentation)

export default Board
